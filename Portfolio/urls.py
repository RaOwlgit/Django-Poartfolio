"""
URL configuration for Portfolio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Home page
    path('gallery/', views.gallery, name='gallery'),  # Gallery page
    path('contact_us/', views.contact_us, name='contact_us'),  # Contact Us page
    path('terminal_command/', views.terminal_command, name='terminal_command'),   #Terminal Command page
    path('syllabus/', views.syllabus, name='syllabus'),  # Syllabus page

]

