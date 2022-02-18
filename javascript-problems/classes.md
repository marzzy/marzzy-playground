
# Object Oriented Example

In this example, we are going to build a mock comments section.
Design

We're going to focus on two aspects:
Users

    Users come in 3 flavors, normal users, moderators, and admins:
        Normal users can create new comments, and edit their own comments. They cannot delete any comments.
        Moderators have all the permissions the Users have, and on top of that they are able to delete any comments
        Admins have all the permissions the Moderators have, and on top of that they are able to edit or delete any comment.
    Users can log in and out, and we track when they last logged in.
    The log in is done asynchronously using a Promise.

Comments

    Comments are simply a message, a timestamp, and the author.
    Comments can also be a reply, so we'll store what the replied comment was.
    Comments should be displayed in the following way (toString method):
        When the comment is not a reply:

        `<message> by <author>`

        When the comment is a reply:

        `<message> by <author> (replied to <other author>)`

        Note: <message>, <author> and <other author> are replaced with the actual values without the wrapping < and >, e.g: hello there from John
