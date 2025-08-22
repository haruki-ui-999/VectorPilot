export async function POST(request) {
  try {
    const body = await request.json();
    const { email, role } = body;

    if (!email || !role) {
      return Response.json(
        { error: 'Email and role are required' },
        { status: 400 }
      );
    }

    // Simulate Zapier webhook integration
    // In a real implementation, this would send to your actual Zapier webhook URL
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/';
    
    const zapierPayload = {
      email,
      role,
      source: 'VectorPilot Website',
      timestamp: new Date().toISOString(),
      leadScore: role === 'engineering-manager' || role === 'platform-team' ? 'high' : 'medium'
    };

    // Send to Zapier webhook (would work with real webhook URL)
    try {
      await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(zapierPayload)
      });
    } catch (zapierError) {
      console.log('Zapier webhook simulation:', zapierPayload);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error processing lead submission:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}