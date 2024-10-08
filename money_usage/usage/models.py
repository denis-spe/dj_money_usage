from django.db import models


# Create your models here.
class Income(models.Model):
    pub_date = models.DateField("published_date")
    income = models.DecimalField(max_digits=16, decimal_places=4)
    desc = models.CharField(max_length=255)

    def __str__(self) -> str:
        return f"id: {self.pk} income: {self.income}"


class Spent(models.Model):
    pub_date = models.DateField("published_date")
    spent = models.DecimalField(max_digits=16, decimal_places=4)
    desc = models.CharField(max_length=255)

    def __str__(self) -> str:
        return f"id: {self.pk} spent: {self.spent}"
