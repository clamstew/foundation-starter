# Foundation scss Starter


A repo to start using foundation with SASS/SCSS for the students at MKS. It includes a basic html file `index.html` where you can design your page.  It also includes the `js` needed to use all the Foundation js components at the bottom of the DOM. Feel free to play around with all of those, as well.

The motivation for this is pretty much summed up by the overhead described in this article: <a href="http://www.soholaunch.com/Blog.php?id=85" target="_blank">soholaunch.com/Blog.php?id=85</a>.  It is a lot of overhead for the first week of the course to grab all the dependencies to really do this the proper way.


## Clone and Bundle

After you **clone this repo down** to a local directory inside your mks folder that has the vagrant file.  Then you can run `bundle install` in your vagrant box.  It will grab the sass gem from the internet and any dependencies.


## Compile

Then you can start up your sass compiler with **my/path** [ `bundle exec sass --watch -l ./scss/foundation.scss:./css/style.css` ].


## Add your own CSS

If you add your own SASS or SCSS (_You get to choose. The sass compiler can do both at once._), make sure to do it in the `scss/` directory.  

So if you are working on your **header** and making your own, you might make a new file called `header.sass` and put it directly inside of the `scss/` directory.  Then you need to go to the `foundation.scss` file, and add your `header.sass` file by either adding it to the long list of import statements.  Yours won't be nested in the foundation folder, so it will look like:

```scss
@import
//...
//...
  "foundation/components/type",
  "foundation/components/offcanvas",
  "foundation/components/visibility"
  "header"; // <--- this is my new file
```

## Add your own variables file

Since a variable file, such as `myvars.sass`, needs to be included higher up on the inheritance chain, make sure to put it first, even before you import the foundation settings. Then all files will have access to your own save variables.

```scss
// Make sure the charset is set appropriately
@charset "UTF-8";

@import 'myvars' // <--- your varialbes file needs to go first

@import 'foundation/settings';

// Behold, here are all the Foundation components.
@import
  "foundation/components/grid",
  "foundation/components/accordion",
  "foundation/components/alert-boxes",
  "foundation/components/block-grid",
  // ...
```

----


# BUT WAIT!! The cool thing about Foundation is customizing it!

**To customize:** Go to `./scss/foundation/components/_settings.scss` in this project.  This crazy long list of sass `$variables` are really useful for getting your sass looking the way you want.

These variables correspond to the variables in the documentation.  Let's look at 3 examples:

#### Page Background Color

First let's simply override the **background color**.  On this page: <a href="http://foundation.zurb.com/docs/components/global.html" target="_blank">Foundation Global Styles</a> look for the variable `$body-bg`.  If you can't find it press <kbd>command</kbd> + <kbd>F</kbd>, and type `$body-bg`.  By default it is white.  If you change it from `#fff` to another color, you main background on your site will change.

#### Grids

Next lets look at the number of columns.  By default Foundation has 12 columns that are within a container.

12 columns is flexible enough for many layouts.  You can make many sizes out of them.  But if you only need, for example, four columns for most use cases in your design, you can look at this page: <a href="http://foundation.zurb.com/docs/components/grid.html" target="_blank">Grid Docs</a>.  At the top it gives you many **code samples** to give you an idea of how to use this css with your html code.  If you scroll down to the bottom, you will see those sass vars again. You will see this:

```sass
$row-width: rem-calc(1000);
$column-gutter: rem-calc(30);
$total-columns: 12 ;
```

If you search `_settings.scss` for `$total-columns`, you will see that it is again commented out and has the defualt of `12`. You could then change it to `4`.  This will recalculate all the `percentages` of the columns and the column gutters to optimize it for 4 columns - remember one of the 3 pillars of responsive design we talked about in class.

#### Topbar

Foundation includes that classic somewhat ubiquitous topbar that you see across the web with floats and dropdowns.

If you want to customize the color of that, you can go to <a href="http://foundation.zurb.com/docs/components/topbar.html" target="_blank">Topbar</a>.  Again at the bottom look for your variables and find `$topbar-bg: #111;`.  You would then search in `_settings.scss` for `$topbar-bg` and you can add any background propertiest to it from colors to gradients to even a background image.


#### WARNING about uncommenting lines in _settings.scss

If you uncomment in a file that is one of their variables by default, either **1) make sure you have declared your own override `$variable` value set in your `myvar.sass`**, which you would put (per the directions above), OR **2) make sure you change that variable to a hard value**.

<span style="color: red;">Otherwise, if you are going to leave it set to their default variable, don't uncomment that line in settings.  It WILL throw an error.</span>


# YAGNI

Do not hesitate at all to **start by commenting out most of the @imported files** in `foundation.scss`.  If you're not going to use it then why produce all that css to start.  As you build out a site with Foundation and get used to it, **comment in only the components that you do need**.
