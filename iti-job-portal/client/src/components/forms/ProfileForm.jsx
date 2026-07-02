import { useState } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';

const ProfileForm = ({ type = 'student', initialValues, onSubmit }) => {
  const [form, setForm] = useState(initialValues || {});

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded border bg-white p-5">
      {type === 'student' && (
        <>
          <TextInput label="Trade" value={form.trade || ''} onChange={(e) => handleChange('trade', e.target.value)} />
          <TextInput label="ITI Institute Name" value={form.itiInstituteName || ''} onChange={(e) => handleChange('itiInstituteName', e.target.value)} />
          <TextInput label="Qualification" value={form.qualification || ''} onChange={(e) => handleChange('qualification', e.target.value)} />
          <TextInput label="Year of Passing" type="number" value={form.yearOfPassing || ''} onChange={(e) => handleChange('yearOfPassing', e.target.value)} />
          <TextInput label="Location" value={form.location || ''} onChange={(e) => handleChange('location', e.target.value)} />
          <TextInput label="Contact Number" value={form.contactNumber || ''} onChange={(e) => handleChange('contactNumber', e.target.value)} />
          <TextArea label="Skills (comma separated)" value={(form.skills || []).join(', ')} onChange={(e) => handleChange('skills', e.target.value.split(',').map((s) => s.trim()).filter(Boolean))} />
        </>
      )}

      {type === 'employer' && (
        <>
          <TextInput label="Workshop Name" value={form.workshopName || ''} onChange={(e) => handleChange('workshopName', e.target.value)} />
          <TextInput label="Industry Type" value={form.industryType || ''} onChange={(e) => handleChange('industryType', e.target.value)} />
          <TextInput label="Location" value={form.location || ''} onChange={(e) => handleChange('location', e.target.value)} />
          <TextInput label="Address" value={form.address || ''} onChange={(e) => handleChange('address', e.target.value)} />
          <TextInput label="Contact Person" value={form.contactPerson || ''} onChange={(e) => handleChange('contactPerson', e.target.value)} />
          <TextInput label="Contact Number" value={form.contactNumber || ''} onChange={(e) => handleChange('contactNumber', e.target.value)} />
          <TextInput label="Website URL" value={form.websiteUrl || ''} onChange={(e) => handleChange('websiteUrl', e.target.value)} />
        </>
      )}

      <button className="rounded bg-black px-4 py-2 text-white">Save Changes</button>
    </form>
  );
};

export default ProfileForm;
