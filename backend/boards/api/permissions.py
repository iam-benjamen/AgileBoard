from rest_framework import permissions

class IsBoardAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user in obj.admins.all()
    

class IsBoardMember(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user in obj.members.all()
    

class IsBoardAdminOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            # Allow read-only permissions for all users (GET, HEAD, OPTIONs)
            return True
        return IsBoardAdmin().has_object_permission(request, view, obj)