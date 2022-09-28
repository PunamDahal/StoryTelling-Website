from django.shortcuts import render

from pdb import post_mortem
from django.shortcuts import render, redirect
from .models import form


def home_page(request):
    return render(request,'index.html')

def contact_page(request):
    print (request.POST)
    if request.method=='POST':
        post=form()
        post.fullname = request.POST['username']
        post.email=request.POST['email']
        post.PasswordInput=request.POST['password']
        post.save()
        return render(request,'login.html')
        
    else:
            return render(request,'login.html')

