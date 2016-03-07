# Frontend Guideline #

## Install ##

**Install requirements:**

* Node Package Manager (https://nodejs.org/en/)
* Bower Package Manager (http://bower.io/)
* SASS (http://sass-lang.com/)


**Install bower dependencies:**
On the terminal

    bower install —save

**Add SASS watchers on WebStorm settings:**

Output path to refresh:

    $FileParentDir$/css/$FileNameWithoutExtension$.css

Arquments:

    --no-cache --update $FileName$:$ProjectFileDir$/css/$FileNameWithoutExtension$.css
    
    
**Grunt build:**
Install grunt dependencies:

    npm install

Run gruntfile default task:

    grunt
