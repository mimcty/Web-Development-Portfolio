function TopicsPage(){
    return (
        <>
        <section id="home-articles">
            <h2>Web Development Concepts</h2>
            <nav className="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#optimization">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#js">JavaScript</a>
            </nav>

            <article id="webServers">
                <h3>Web Servers</h3>
                <p>A <strong>designated home page</strong> is the file or program the <strong>client's</strong> browser is directed to when a <strong>URL</strong> is requested.
                Usually, the path /index.html on the server contains the file for the homepage. However, other <strong>servers</strong> (e.g. Microsoft's NET platform) can use default.html.
                Files in other languages are also supported, such as index.js or index.php. </p>
                <p>In a web browser Inspector's Network output screen, the components of the <strong>HTTP request</strong> (or other protocols) are shown. Under Headers, we can see the general details of
                the HTTP request, such as the <strong>request URL</strong>, <strong>request method</strong>, and <strong>status code</strong>. Under Response Headers and Request Headers, there are key-value pairs that describe 
                attributes of the HTTP request and response, such as the server, type of content, and date last modified. The same file can have a different request URL when viewed
                from different sources (e.g. the web server versus the local computer).</p>
                <p>The favicon.ico file has status 200 because the browser provides a default <strong>favicon</strong> (e.g. a globe icon) if no favicon.ico file is present on the server.
                The main.css and main.js files have <strong>status codes</strong> 400 or 404 since these files do not exist in the same directory as index.html. Since 400-499 error codes represent 
                client-side errors, we see that the client is trying to request main.css and main.js when the server does not have these resources.</p>
                <p>The URL of my web server's file is https://web.engr.oregonstate.edu/~mats/a1-mats/.
                The constituent parts are as follows---<strong>scheme</strong>: HTTPS; <strong>subdomains</strong>: web (subdomain of the engr.oregonstate.edu domain), engr (subdomain of the oregonstate.edu domain);
                <strong>host domain</strong>: oregonstate.edu; <strong>path to resource</strong>: /~mats/a1-mats/.</p>
            </article>

            <article class="topics" id="frontendDesign">
                <h3>Frontend Design</h3>
                <p><strong>Frontend design</strong>, which is responsible for designing the <strong>graphical user-interface (GUI)</strong> of an application/page, aims to create an intuitive browsing experience for the user. This includes visual elements such as colour
                scheme, font type and size, icons and photos, and illustrative icons and buttons. When combined, these aspects of the page help the user interact with, and navigate, the website with ease.
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>The website should aid users in achieving their goals and predict their intended usage.</dd>
                    
                    <dt><strong>Efficient</strong></dt>
                    <dd>The user should be able to meet their goal in the fastest way possible.</dd>
                    
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>The interface should be interesting to the intended audience and the user experience should be engaging.</dd>
                    
                    <dt><strong>Easy to Learn</strong></dt>
                    <dd>A new user should be able to understand and navigate the interface easily in order to reach their intended goal.</dd>
                    
                    <dt><strong>Error Tolerant</strong></dt>
                    <dd>The website should anticipate common user errors and create exceptions for each case to minimize issues and increase accessibility.</dd>
                </dl>
    
                <p>The purpose of 6 key <strong>page layout tags</strong> are as follows: 
                The <strong>header</strong> tag, <code>&lt;header&gt;</code>, defines the banner of the page. Usually, the name of the site, publisher, and slogan are included. 
                The <strong>nav</strong> tag, <code>&lt;nav&gt;</code>, holds links that take the user to another page. For example, the main menu may have navigation links to the contact page, search page, etc.
                The <strong>main</strong> tag, <code>&lt;main&gt;</code>, demarcates the primary content of the website, such as the graphics, text, and links related to the central topic of the page.
                The <strong>section</strong> tag, <code>&lt;section&gt;</code>, groups parts of the page into related topics. Sections are usually headlined with an h1 heading to indicate what the content is about.
                The <strong>article</strong> tag, <code>&lt;article&gt;</code>, designates more specific topics within a section, typically with a h2 heading. 
                The <strong>footer</strong> tag, <code>&lt;footer&gt;</code>, is used below the main tag and states the copyright statement and other legal or contact information.
                </p>

                <ol>
                    <li><strong>External links</strong> use absolute URLs to navigate to another website, bringing the user outside of the current website. (e.g. <code>https://example.com</code>).</li>
                    <li><strong>Internal links</strong> use <code>id</code> attributes (e.g.: <code>#section-id</code>) to direct the user to an article on the same page.</li>
                    <li><strong>Page-to-page links</strong> use relative URLs to allow navigation between different pages of the same website (e.g.: <code>/contact.html</code>). The link can either be in the same directory, or
                    a parent/child directory.</li>
                </ol>
            </article>

            <article id="optimization">
                <h3>Optimizing Images</h3>
                <p><strong>Optimization</strong> refers to the process of ensuring the best quality, size, and file size for an image, while taking into account various issues. When visiting a site, users do not want to wait for images to load, 
                or have images obstruct the text. The 6 major <strong>image optimizing specifications</strong> address these problems and help improve the viewer's browsing experience.</p>
                <p>Firstly, the file should have a <strong>descriptive file name</strong> to help search engines understand what the file contains. Secondly, the image should maintain a <strong>small file size</strong> to keep load times efficient.
                High-resolution images should only be used on high-resolution devices to minimize long wait times on all devices. Thirdly, the images should fit the <strong>exact dimensions</strong> allotted to it on the site. Keeping images at the 
                necessary size helps reduce load times as well. Fourth, the <strong>file format</strong> should be correct. This will be explained in more detail in the next paragraph. Next, the resolution of the monitor should be taken into account. 
                Images should offer <strong>reduced resolution</strong> options using multiple image sizes. Lastly, the <strong>colour mode</strong> should be correct; <strong>RGB</strong> should be used for 
                .PNG, .JPG, .SVG, and .WebP, and <strong>Indexed</strong> should be used for .GIF.</p>
                <p>Different images require different <strong>file formats</strong>. Each format has a different balance of quality, file size, compression, and other factors, which are more suitable for different types of images.
                <strong>JPEG</strong> (.jpg or .jpeg) is the preferred format for images with many different colours, as it reduces file size via <strong>lossy compression</strong>. This allows the image to retain enough quality while keeping the file size low.
                On the other hand, <strong>PNG</strong> (.png) is better for logos, line art, or images with transparency, which require sharper edges and contrast to give the viewer a clear effect. This format uses <strong>lossless compression</strong>, which 
                prioritizes quality over file size. 8-bit .PNG can be used for icons, but transparency requires 24-bit .PNG. On the other hand, <strong>.SVG</strong> is used for two-dimensional graphics, as they can be scaled or resized without loss of quality. Lastly, 
                <strong>WebP</strong> is a new format developed by Google, intending to replace JPEG and PNG with improved lossless and lossy compression.</p>
            </article>

            <article id="favicons">
                <h3>Favicons</h3>
                <p><strong>Favicons</strong> are small icons that appear on a tab. They help the user visually identify, and distinguish, the website from other open tabs.
                Usually, favicons are chosen to represent the website, either with the site's logo, or with a graphic related to the 
                site's purpose. Favicons are also displayed in Bookmarks, which helps remind the user what the website is about. Within the root file, they are added as either <strong>.PNG</strong>
                files or <strong>.ICO</strong> files. <strong>.SVG</strong> files are also used, but not supported by all browsers.</p>
            </article>

            <article id="css">
                <h3>Cascading Stylesheets</h3>
                <p>Stylesheets are what makes each webpage different—imagine how dull the Web would be if every page had the same layout! Each element can be styled with different colours, padding, borders, and margins.
                Changing these attributes, as well as adding fonts and images, imparts visual continuity and a better browsing experience for the user. Stylesheets can be altered to apply to several classes and
                elements at once, making updates easy for the designer.</p>
                <p>There are 5 ways to alter a page's style. There are 3 ways of embedding styles directly into HTML/JavaScript files. These alter the element as it 
                is created, which makes it difficult to track for changes in the future. <strong>Inline style definition</strong> allows the designer to change the style 
                directly where the element is created in the HTML file, using an attribute and value pair. A style can also be <strong>embedded</strong> within a <code>&lt;style&gt;</code>
                <code>&lt;/style&gt;</code> tag, where the syntax follows CSS methods. Lastly, using <strong>JavaScript</strong> to manipulate the <strong>Document Object Model (DOM)</strong>
                updates the style based on the element passed to the function call. On the other hand, CSS rules can be written in another file <strong>(.css)</strong> and linked or imported to the page.
                <strong>Imported external stylesheets</strong> are usually used for specific component styling, with the syntax <code>&lt;@import "component-name.css"&gt;</code>. Finally, almost all pages
                will have a <strong>global stylesheet</strong> that is externally linked in the <code>&lt;head&gt;</code> section of each page; the relative path is used to find the .css file.
                These methods of altering element styles are listed from highest to lowest precedence, with inline styles having the top priority, and global stylesheets having the least. So, if the global
                .css file defined h1 headings to be blue, but a page's HTML file included an inline style that changed a specific h1 heading to red, that heading will be red instead of blue.</p>
            </article>

            <article id="js">
                <h3>JavaScript</h3>
                <p>In JavaScript, there are 6 main data types-<strong>numbers</strong>, <strong>Boolean values</strong> (true or false), <strong>strings</strong>,
                <strong>symbols</strong>, special values <strong>undefined</strong> and <strong>null</strong>, and <strong>objects</strong>.</p>
                <p>Objects are used in JavaScript as a collection of related <strong>properties</strong> and <strong>methods</strong> (functions that belong to an object).
                They consist of <strong>key:value pairs</strong>, which can be accessed using dot notation (e.g.: object.name will retrieve the object's property "name"). The value
                of each property in an object can be of any <strong>data type</strong>.
                <strong>Arrays</strong> are a type of object, where the property name of the array is a string that represents the index of the property in that array. With these indices,
                they represent an ordered list of values. <strong>JSON</strong>, which stands for JavaScript Object Notation, is a text-based format used to send data in a universally understood
                form. Data is represented as key-value pairs and is parsed by machines to retrieve the data.</p>
                <p><strong>Conditionals</strong> are written based on "if" statements, giving one or more alternative options for how the code should run. In most cases, the first "if" statement checks against a 
                given condition, and based on whether the result is true or not, a section of the code will run. <strong>Loops</strong>, on the other hand, allow for a block of code to be repeated multiple times 
                based on a condition. <strong>"For"</strong> loops allow for the code to continue for a certain number of times, whereas a <strong>"while"</strong>
                loop continues as long as a given condition remains true.</p>
                <p><strong>Object-Oriented Programming</strong> is an approach to writing code, where <strong>objects</strong> are used to model things that have an <strong>identity</strong>,
                <strong>state</strong>, and <strong>behaviour</strong>. This means that each object is unique and distinct from another object, has its own properties, and are <strong>first-class values</strong>.</p>
                <p><strong>Functional programming</strong> further expands on the concept that functions in JavaScript are first-class values. This means that they are treated like all other values, and can be assigned to 
                a variable, passed as arguments to other functions, and returned from functions. These create <strong>higher-order functions</strong>, which are functions that take other functions as an argument. In this way,
                functions can be stacked to perform much more than one function could do alone.</p>
            </article>
        </section>

        <article>
            <h3></h3>
            <p></p>
        </article>
        </>
    )
}
export default TopicsPage;