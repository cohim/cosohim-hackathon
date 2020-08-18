from django.db import models

class Post(models.Model):
    idx= models.CharField(max_length=200)
    # title_image=models.ImageField(blank=True)
    productName=models.TextField(null=True,default='')
    guarantee=models.TextField(null=True,default='')
    liog=models.TextField(null=True,default='')
    termgrt=models.TextField(null=True,default='')
    seat=models.TextField(null=True,default='')
    date=models.TextField(null=True,default='')
    interestRate=models.TextField(null=True,default='')
    # title = models.CharField(max_length=200)
    # content = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.idx