from rest_framework import serializers
from ..models import Board, Task, Stage
from django.contrib.auth import get_user_model


class TaskSerializer(serializers.HyperlinkedModelSerializer):

    assignees = serializers.HyperlinkedRelatedField(many=True, view_name='assignees', read_only=True)
    # stage = StageSerializer(read_only=True)
    # board = BoardSerializer(read_only=True)
    class Meta:
        model = Task
        fields = '__all__'


class StageSerializer(serializers.HyperlinkedModelSerializer):

    # url = serializers.HyperlinkedIdentityField(
    #     view_name='stages',
    #     lookup_field='id'
    # )
    tasks = TaskSerializer(many=True, read_only=True)
    class Meta:
        model = Stage
        fields = '__all__'



class BoardSerializer(serializers.HyperlinkedModelSerializer):

    url = serializers.HyperlinkedIdentityField(
        view_name='Boards',
        lookup_field='id'
    )
    stages = StageSerializer(many=True, read_only=True)
    admins = serializers.HyperlinkedRelatedField(many=True, view_name='board-admins', read_only=True)
    members = serializers.HyperlinkedRelatedField(many=True, view_name='board-members', read_only=True)
    class Meta:
        model = Board
        fields = '__all__'


class UserSerializer(serializers.HyperlinkedModelSerializer):
    # tasks = serializers.HyperlinkedRelatedField(many=True, view_name='user-tasks', read_only=True)
    class Meta:
        model = get_user_model()
        fields = '__all__'