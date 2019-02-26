from django.contrib import admin
from . import models


@admin.register(models.Notification)
class Notification(admin.ModelAdmin):

    list_display = (
        'creator',
        'to',
        'notification_type'
    )
