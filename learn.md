## The code for flash middleware

```
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
```
## Exmaplation

```
res.locals is an object that contains local variables scoped to the request and response. These variables are available only to the view rendered during that request/response cycle. By setting properties on res.locals, you make them available in the view templates. and
.suscces_msg is the name of the flash
```

## While redirecting the route to login after sending the message 

```
Your current approach to redirect the user after 3 seconds won't work as expected because once you send an HTTP response (e.g., res.status(403).json({error: "Access denied please login first"});), you cannot send another response (e.g., res.redirect('/')) since the connection is already closed.

To achieve this, you should use client-side JavaScript to handle the redirection after displaying the error message. Here’s how you can do it:
```
* In the verify token
```
   if (!token) {
        res.status(403).send(`
            <html>
                <body>
                    <p>Access denied, please login first.</p>
                    <script>
                        setTimeout(function() {
                            window.location.href = '/';
                        }, 3000);
                    </script>
                </body>
            </html>
        `);}
```      

## Explaination of coverting bufferData into image 

```
router.get('/user', async (req, res) => {
    try {
        // Find the user by username and populate their posts
        const user = await userModel.findOne({ username: req.user.username }).populate('posts');

        // Convert each post's data buffer to a base64-encoded string
        const posts = user.posts.map(post => {
            const base64Data = post.data.toString('base64'); // Convert buffer to base64
            return {
                ...post.toObject(), // Convert Mongoose document to plain JavaScript object
                base64Data // Add the base64 string to the object
            };
        });

        // Render the profile view with the user object, which now includes posts with base64 data
        res.render('profile', { user: { ...user.toObject(), posts } });
    } catch (error) {
        console.error('Error rendering profile:', error);
        res.status(500).send('Internal Server Error');
    }
});
```

#### Display Image:

* <img src="data:<%= post.content_type %>;base64,<%= post.base64Data %>" ... /> constructs the image source using a data URL.
* data:<%= post.content_type %>;base64,<%= post.base64Data %> sets the image source to the base64-encoded data with the appropriate content type (e.g., image/jpeg).
* The post.content_type and post.base64Data are dynamically inserted into the src attribute.


##  Displaying the Dp 

```
1..leftSide : <% if (user.dp) { %>
                        <img src="data:<%= contentType %>;base64,<%= base64Data %>" class="w-full h-full object-cover object-center" alt="User Image">
                    <% } else { %>
                        <img src="/img/default/default.png" class="w-full h-full object-cover object-center " alt="Default User Image">
                    <% } %>
2.. major route logic :  try {
        const user = await findingUser(req.user.username);
        
        if (user && user.dp) {
            const base64Data = user.dp.toString('base64');
            const contentType = user.content_type || 'image/jpeg';
            res.render("edit", { user, base64Data, contentType });
        } else {
            res.render("edit", { user });
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Internal Server Error");
    }
2.. profile full logic : router.get('/', async (req, res) => {
    try {
        const user = await findingUser(req.user.username);

        // Convert each post's data buffer to a base64-encoded string
        const posts = user.posts.map(post => {
            const base64Datas = post.data.toString('base64');
            return {
                ...post.toObject(),
                base64Datas
            };
        });

        if (user && user.dp) {
            const base64Data = user.dp.toString('base64');
            const contentType = user.content_type || 'image/jpeg';
            res.render('profile', { user: { ...user.toObject(), posts   } , base64Data , contentType });
        } else {
            res.render('profile', { user: { ...user.toObject(), posts } });

        }

    } catch (error) {
        console.error('Error rendering profile:', error);
        res.status(500).send('Internal Server Error');
    }
});

```