in server
-------------
 docker
 apt  install docker.io -y
 sudo visudo
    jenkins ALL=(ALL) NOPASSWD: ALL
 in jenkins
 -------------
 install stage view
 create new item
   pipeline
      defination - pipeline script from SCM
           SCM - GIT
                repository url
                branch same as in the repository
save
apply
build
