from django.test import TestCase
from .models import Income, Spent
from django.utils import timezone


# Create your tests here.
class TestIncome(TestCase):
    """
    Testing the Income model.
    """

    def setUp(self):
        """
        Run before running test functions
        """
        # Current date time.
        now = timezone.now()

        # Instantiate the first day income.
        self.day_1_income = Income(
            pub_date=now, income=823, desc="My first day income from my job."
        )
        # Save it.
        self.day_1_income.save()

    def test_added_income(self):
        """
        Test added income.
        """
        # Get the first added income.
        day_1_income = Income.objects.get(pk=1)

        self.assertEquals(day_1_income.income, 823)


class TestSpent(TestCase):
    """
    Testing the Spent models
    """

    def setUp(self):
        # Current date time.
        now = timezone.now()

        # Instantiate the first day spent.
        self.day_1_spent = Spent(
            pub_date=now, spent=438, desc="I used this amount on fuel."
        )
        # Save it.
        self.day_1_spent.save()

    def test_added_spent(self):
        """
        Test added Spent.
        """
        # Get the first added spent.
        day_1_spent = Spent.objects.get(pk=1)

        self.assertEquals(day_1_spent.spent, 438)
