from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .serializers import UserSerializer, BoardSerializer, StageSerializer, TaskSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import generics, status
from ..models import Board, Stage, Task
from rest_framework.permissions import IsAuthenticated
from .permissions import IsBoardAdminOrReadOnly, IsBoardAdmin, IsBoardMember

class UserViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def list(self, request):
        queryset = get_user_model().objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, id=None):
        queryset = get_user_model().objects.all()
        user = get_object_or_404(queryset, id=id)
        serializer = UserSerializer(user)
        return Response(serializer.data)


class BoardListCreateAPIView(generics.ListCreateAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        admins = [self.request.user]
        members = [self.request.user]
        serializer.save(admins=admins, members=members)
    

class BoardRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    permission_classes = [IsAuthenticated, IsBoardAdminOrReadOnly]


class BoardMemberAPIView(generics.GenericAPIView):
    queryset = Board.objects.all()
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return generics.get_object_or_404(Board, id=self.kwargs['id'])
    
    def post(self, request, id, action):
        board = self.get_object()
        user_id = request.data.get('user_id')

        if action == 'add_member' and IsBoardAdmin().has_object_permission(request, self, board):
            # Add member to the board
            if user_id:
                user = generics.get_object_or_404(get_user_model(), id=user_id)

                if user not in board.members.all():
                    board.members.add(user)
                    return Response({'detail': 'Member added successfully.'}, status=status.HTTP_201_CREATED)
                else:
                    return Response({'detail': 'User is already a member of the board.'}, status=status.HTTP_400_BAD_REQUEST)
                
            else:
                return Response({'detail': 'User ID is required.'}, status=status.HTTP_400_BAD_REQUEST)
            
        elif action == 'remove_member' and (IsBoardAdmin().has_object_permission(request, self, board) or IsBoardMember().has_object_permission(request, self, board)):
            # Remove member from the board
            if user_id:
                user = generics.get_object_or_404(get_user_model(), id=user_id)

                if user in board.members.all():
                    board.members.remove(user)
                    return Response({'detail': 'Member removed successfully.'}, status=status.HTTP_200_OK)
                
                else:
                    return Response({'detail': 'User is not a member of the board.'}, status=status.HTTP_400_BAD_REQUEST)
                
            else:
                return Response({'detail': 'User ID is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        else:
            return Response({'detail': 'Permission denied.'}, status=status.HTTP_403_FORBIDDEN)
            

class StageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer

    def get_queryset(self):
        board_id = self.kwargs['id']
        board = get_object_or_404(Board, id=board_id)
        return Stage.objects.filter(board=board)


class StageListView(generics.ListCreateAPIView):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer

    def get_queryset(self):
        board_id = self.kwargs['id']
        board = get_object_or_404(Board, id=board_id)
        return Stage.objects.filter(board=board)


class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskListView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class AssignTaskToUserAPIView(generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        task = self.get_object()
        user_ids = request.data.get('user_ids', [])

        users = get_user_model().objects.filter(id__in=user_ids)
        task.assignees.set(users)

        return Response({'detail': 'Task assigned successfully.'}, status=status.HTTP_200_OK)