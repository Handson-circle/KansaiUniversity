from django.contrib import admin
from .models import Question, Choice  # Choice を正しい名前に修正

admin.site.register(Question)
admin.site.register(Choice)
