# EmailJS Template

Use this exact HTML body in your EmailJS template editor to ensure bold labels and the correct fields:

```html
<b>New Quote Request Received</b>

<b>Submitted On:</b> {{time}} (Canada)

<b>Customer Name:</b> {{full_name}}
<b>Phone:</b> {{phone}}
<b>Email:</b> {{email}}

<b>Project Details:</b> {{message}}
```

This template assumes your React form sends the following variables via EmailJS:
- `time`
- `full_name`
- `phone`
- `email`
- `message`

If you want the labels to display in bold in the email, this HTML template body should be used in the EmailJS dashboard.
