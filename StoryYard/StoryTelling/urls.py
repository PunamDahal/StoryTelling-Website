from cgitb import html
from django.urls import path
from .views import home_page
from .views import contact_page
from. import views

urlpatterns = [
    path('home/',views.home_page),
    path('contact/',views.contact_page, name='form'),
]