from django.shortcuts import render
from .models import Income
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder


class LazyEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, Income):
            return str(obj)
        return super().default(obj)


# Create your views here.
def index(request):
    overall_income = Income.objects.all()
    serial = serializers.serialize("json", overall_income, cls=LazyEncoder)
    context = {"income": serial}

    return render(request, "usage/index.html", context=context)
