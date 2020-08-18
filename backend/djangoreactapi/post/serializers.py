from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'idx',
            'productName',
            'guarantee',
            'liog',
            'termgrt',
            'seat',
            'date',
            'interestRate',
        )
        model = Post
