from django.db import models
from yongheegram.users import models as user_model


class TiemStampModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Image(TiemStampModel):

    """ Image Model """

    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_model.User, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return '{} - {}'.format(self.location, self.caption)


class Comment(TiemStampModel):

    """ Commend Model """

    message = models.TextField()
    creator = models.ForeignKey(user_model.User, on_delete=models.PROTECT, null=True)
    image = models.ForeignKey(Image, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.message


class Like(TiemStampModel):

    """ Like Model """

    creator = models.ForeignKey(user_model.User, on_delete=models.PROTECT, null=True)
    image = models.ForeignKey(Image, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return 'User:{} - Image Caption:{}'.format(self.creator.username, self.image.caption)
