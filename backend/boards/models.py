from django.db import models
from django.contrib.auth import get_user_model
import uuid
from mptt.models import MPTTModel, TreeForeignKey

class Board(models.Model):
    """ Board models """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=25)
    createdat = models.DateTimeField(auto_now_add=True)
    updatedat = models.DateTimeField(auto_now=True)
    admins = models.ManyToManyField(get_user_model(), related_name='admin_boards')
    members = models.ManyToManyField(get_user_model(), related_name='member_boards')

    # # function to add users as members
    # def add_member(self, user):
    #     self.members.add(user)

    # # function to add user as admin
    # def add_admin(self, user):
    #     self.admins.add(user)


class Stage(models.Model):
    """ Board Stages attached the to boards """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=25)
    createdat = models.DateTimeField(auto_now_add=True)
    updatedat = models.DateTimeField(auto_now=True)
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name='Stages')

    class Meta:
        unique_together = ('name', 'board')


class Task(MPTTModel):
    """ MPTTModel for creating tasks with sub tasks """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)     # UUID field for primary key field
    assignees = models.ManyToManyField(get_user_model(), related_name='assigned_tasks', blank=True)
    description = models.TextField()     # Description of task
    createdat = models.DateTimeField(auto_now_add=True)     # Created date
    updatedat = models.DateTimeField(auto_now=True)     # Date updated
    targetcompletiondate = models.DateTimeField()       # Target Completion Date
    stage = models.ForeignKey(Stage, on_delete=models.CASCADE, related_name='Tasks')
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')

    class MPTTMeta:
        order_insertion_by = ['createdat']
