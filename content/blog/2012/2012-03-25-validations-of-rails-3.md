---
title: "Validations of rails 3"
date: 2012-03-25 22:40
description: ""
slug: "/blog/2012/validations-of-rails-3"
---

To work with server validations we write them in our model by using Active Record library. In rails 3 there is syntax differences to write the validations.

In rails 2.x.x versions:

```ruby
validates_presence_of :first_name,:email
validates_uniqueness_of :first_name
validates_format_of :email, :with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
```

Here, we need to write each and every validation as new command for the same field. But in rails 3 we can mention all the validations in a single command. In the following lines you can observe the difference.

In rails 3.x.x version:

```ruby
validates :username,
:presence => true,
:uniqueness => {:if => :username?}

validates :password,:password_confirmation,
:presence => true

validates :email,
:presence => true,
:uniqueness => { :scope => :user_id },
:format => { :with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i , :message => "is invalid format", :if => :email?}
```

By providing this, it is very easy to use and write the code with flexible.
