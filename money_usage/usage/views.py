from django.core import serializers
from django.shortcuts import render
from .models import Income

# Create your views here.


def index(request):
    overall_income = Income.objects.all()
    serial = serializers.serialize("json", overall_income)
    context = {"income": serial}

    return render(request, "usage/index.html", context=context)
