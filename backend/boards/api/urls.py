from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet,
    BoardListCreateAPIView,
    BoardRetrieveUpdateDestroyAPIView,
    BoardMemberAPIView,
    StageListView,
    StageDetailView,
    TaskListView,
    TaskDetailView,
    AssignTaskToUserAPIView,
)

board_router = DefaultRouter()
board_router.register(r'Users', UserViewSet)

urlpatterns = [
    path('', BoardListCreateAPIView.as_view(), name='boards-list-create'),
    path('<uuid:id>', BoardRetrieveUpdateDestroyAPIView.as_view(), name='board-retrieve-update-destroy'),
    path('<uuid:id>/add_member/', BoardMemberAPIView.as_view(), name='board-add-member'),
    path('<uuid:id>/remove_member/', BoardMemberAPIView.as_view(), name='board-remove-member'),
    path('<uuid:id>/stages', StageListView.as_view(), name='board-stages'),
    path('stage/<str:name>', StageDetailView.as_view(), name='board-stage-detail'),
    path('tasks/', TaskListView.as_view(), name='task-list'),
    path('tasks/<uuid:id>', TaskDetailView.as_view(), name='task-detail'),
    path('tasks/<uuid:id>/assign_users/', AssignTaskToUserAPIView.as_view(), name='assign-task-to-user'),
]