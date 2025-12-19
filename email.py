from flask import Blueprint, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

email_bp = Blueprint('email', __name__)

@email_bp.route('/send-email', methods=['POST'])
def send_email():
    try:
        # Get form data
        data = request.get_json()
        name = data.get('name', '')
        email = data.get('email', '')
        company = data.get('company', '')
        message = data.get('message', '')
        
        # Validate required fields
        if not name or not email or not message:
            return jsonify({'error': 'Name, email, and message are required'}), 400
        
        # Create email content
        subject = f"New Contact Form Submission from {name}"
        
        # Create HTML email body
        html_body = f"""
        <html>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Company:</strong> {company if company else 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p>{message}</p>
            <hr>
            <p><em>This message was sent from the Kentry Ops website contact form.</em></p>
        </body>
        </html>
        """
        
        # Create plain text version
        text_body = f"""
        New Contact Form Submission
        
        Name: {name}
        Email: {email}
        Company: {company if company else 'Not provided'}
        Message: {message}
        
        ---
        This message was sent from the Kentry Ops website contact form.
        """
        
        # For demonstration purposes, we'll use a simple email service
        # In production, you would use a proper email service like SendGrid, AWS SES, etc.
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = f"Kentry Ops Website <noreply@kentryops.com>"
        msg['To'] = "hello@kentryops.com"
        msg['Reply-To'] = email
        
        # Attach parts
        part1 = MIMEText(text_body, 'plain')
        part2 = MIMEText(html_body, 'html')
        
        msg.attach(part1)
        msg.attach(part2)
        
        # For this demo, we'll simulate sending the email
        # In production, you would configure SMTP settings or use an email service
        
        # Simulate successful email sending
        print(f"Email would be sent to hello@kentryops.com:")
        print(f"Subject: {subject}")
        print(f"From: {name} <{email}>")
        print(f"Company: {company}")
        print(f"Message: {message}")
        
        return jsonify({
            'success': True, 
            'message': 'Thank you for your message! We will get back to you soon.'
        }), 200
        
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return jsonify({'error': 'Failed to send email. Please try again later.'}), 500

@email_bp.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'service': 'email'}), 200

