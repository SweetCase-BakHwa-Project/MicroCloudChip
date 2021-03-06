from django.urls import path, re_path

from . import views

urlpatterns = [


    # Login
    path(r'', views.login_page, name='login_page'),
    path(r'login', views.login, name='login'),
    path(r'main/logout', views.logout, name='logout'),
    path(r'login_failed', views.login_failed, name='login-failed'),

    # Main Page
    path(r'main/browser', views.main_browser, name='main-browser'),
    path(r'main/setting', views.main_setting, name='main-setting'),

    # Browser Section
    re_path(r'download/$', views.download_file),
    path(r'upload', views.upload_file),
    path(r'new-directory', views.make_new_directory),
    path(r'delete', views.delete_datas),
    path(r'download-multiple', views.download_multiple),

    # Setting Section
    path(r'main/setting/adduser', views.add_user_page, name='add-user'),
    path(r'main/setting/adduser-redirection', views.adduser, name='add-user-redirection'),
    path(r'main/setting/modifyuser', views.modify_user_page, name='modify-user'),
    path(r'main/setting/modifyuser-redirection', views.modifyuser, name='modify-user-redirection'),
    path(r'main/setting/deleteuser-redirection', views.deleteuser, name="delete-user-redirection"),

    # Access Error
    path(r'access_denied', views.access_denied, name="access-denied"),

    #Get Data By AJAX
    path(r'get_usage', views.get_usage, name="get-usage")
]