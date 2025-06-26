import { Form, FormCheck, Card } from 'react-bootstrap';

export default function Settings() {
  return (
    <div className='setting-component'>
    <Card className="p-4">
      <h3>Settings (Placeholder)</h3>
      <Form>
        <FormCheck 
          type="switch"
          label="Enable Notifications"
          disabled
        />
        <FormCheck 
          type="switch"
          label="Dark Mode"
          disabled
        />
        <FormCheck 
          type="switch"
          label="Auto Save"
          disabled
        />
        <p style={{ color: 'gray', marginTop: '1rem' }}>
          These are dummy settings — just here to show layout.
        </p>
      </Form>
    </Card>
    </div>
  );
}