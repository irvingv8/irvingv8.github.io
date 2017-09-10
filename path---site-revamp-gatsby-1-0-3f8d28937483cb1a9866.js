webpackJsonp([49854407278027],{"./node_modules/json-loader/index.js!./.cache/json/site-revamp-gatsby-1-0.json":function(t,e){t.exports={data:{markdownRemark:{html:'<html><head></head><body><div>\n  \n  <a class="gatsby-resp-image-link" href="/gatsby-advanced-starter/static/12e22f128e5a8ddb67c3307019545a20-abd41.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 39.333333333333336%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/ElEQVQoz62Ry2rCQBiFfeS+RF+gjyAUrUJXXSgRc5EWjS0aEy+RODEa4r1RY25ujsNAFFowWbg4/IcZ+GbOf3K+F+KRyv09CPwIcXxGSGfoxwhOEVPik5kZaCgO8s88uhKB0lVhEgv6cMy8Zc4hN9swJxZWiw1+t/t0YKui4+XpA+K7BoGXINQlFF6LqHF1NL9aeCuU6JRRrXBYL7c47k/3gURbgC/3YPQcjOjPNHWAhviJYV+nGuFb/mGeq9aw27jpwDCIsLJdtkPv4LNoZDLFbGpj6azZDg+uB3vmsPvUyEkx152OCYuqdFQKnd8epuBMpfyDX5u9326iC64MV2yJT86hAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Gatsby js" title="" src="/gatsby-advanced-starter/static/12e22f128e5a8ddb67c3307019545a20-44d6a.png" srcset="/gatsby-advanced-starter/static/12e22f128e5a8ddb67c3307019545a20-f4799.png 173w,\n/gatsby-advanced-starter/static/12e22f128e5a8ddb67c3307019545a20-b3b1d.png 345w,\n/gatsby-advanced-starter/static/12e22f128e5a8ddb67c3307019545a20-44d6a.png 690w,\n/gatsby-advanced-starter/static/12e22f128e5a8ddb67c3307019545a20-bc0f7.png 1035w,\n/gatsby-advanced-starter/static/12e22f128e5a8ddb67c3307019545a20-abd41.png 1200w" sizes="(max-width: 690px) 100vw, 690px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div></body></html>\n<p>Ok, I haven\'t posted for a while (sorry about that) but there are 2 reasons for it:                                                                                                                           </p>\n<p>1- I\'ve been finishing my Angular2 course</p>\n<p>2- Migrated the site to Gatsby 1.0 and decided to just start from a scratch as I didn\'t like the previous design that much.</p>\n<p>About the first one, I\'m planning to launch a project with Angular2 it\'ll be a PWA, I\'m aware that it seems to be easier to launch a PWA with React or Vue but I want to take the challenge, build something with what I\'ve learned and I think it might be a good idea to document the process of shipping a PWA with Angular2</p>\n<p>And for the second point: the previous version of this site was built over a weekend trying to commit to get it done and start creating content, but I wasn\'t actually happy with the final result. So I started playing around with Sketch and came up with the site you are looking at right now. And I want to share with you all the amazing stuff I found along the way.</p>\n<h2 id="the-design"><a href="#the-design" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Design</h2>\n<p>It is inspired by the <a href="https://www.w3schools.com/w3css/tryw3css_templates_cv.htm">cv template at w3schools</a>. I really liked the concept of separating the content in cards so here we are. I\'d like to thank <a href="https://blog.rphl.io/">Raphael Guttenberger</a> for critiquing my design.</p>\n<h2 id="the-framework"><a href="#the-framework" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Framework</h2>\n<p>Little recap about my site: this is actually the 4th version of my site (and the second to make it to production), the first one was built in WordPress, the second one was built in Jekyll, the third with Gatsby 0.12 and this one (with Gatsby 1.0).</p>\n<p>I believe that everyone knows what WordPress is, so there is no need to talk about it.</p>\n<p>Jekyll was the first static website generator, meaning that there is no interaction with databases or whatsoever nor server side processing for your pages so it\'s just content ready to be served. I really liked working with Jekyll but at that time I started to nitpicking all over the place and delayed the launch of the site several times and I ended up abandoning it.</p>\n<p>Gatsby is also a static site generator BUT it\'s built for React! it\'s developed by <a href="https://www.bricolage.io/">Kyle Mathews</a> (he\'s a really nice guy and you can find him on the <a href="https://www.reactiflux.com/">Reactiflux</a> discord always willing to help). Gatsby 1.0 has a neat plugin system that allows you to extend its functionalities in amazing ways:</p>\n<p>Want to use jss? there is a plugin for it</p>\n<p>Is glamor your thing? there is a plugin for it</p>\n<p>Would rather use typescript? there is a plugin for it</p>\n<p>Want to create your web app manifest? there is a plugin for it</p>\n<p>And the list goes on.</p>\n<h2 id="gatsby-starter"><a href="#gatsby-starter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gatsby Starter</h2>\n<p>Gatsby also counts with a list of "starters" (templates for your site) that can help you get up and running faster. For this site initially I wanted to use the <a href="https://github.com/Vagr9K/gatsby-material-starter">Gatsby Material Starter</a> but after playing around with it I found that React-MD was not going to help me achieve my design so I decided to use the <a href="https://github.com/Vagr9K/gatsby-advanced-starter">Gatsby Advanced Starter</a> as it packs lots of nice stuff out of the box (GA, Disqus, SEO, among others). Both of this starters are made by <a href="https://vagr9k.me/">Ruben Harutyunyan</a></p>\n<p>This will be it for today, stay tuned for the second part of this series where I\'ll comment on some cool stuff I found along the way and of course give you some insights on the actual development of the site with Gatsby.</p>',timeToRead:3,excerpt:"Ok, I haven't posted for a while (sorry about that) but there are 2 reasons for it...",frontmatter:{title:"Site Revamp + Gatsby 1.0",date:"09/10/2017",category:["Javascript","Gatsby"],tags:["Javascript","Gatsby"]}}},pathContext:{slug:"/site-revamp-gatsby-1-0"}}}});
//# sourceMappingURL=path---site-revamp-gatsby-1-0-3f8d28937483cb1a9866.js.map