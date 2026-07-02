import { useState } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import SelectInput from './SelectInput';

const JobForm = ({ initialValues, onSubmit, submitLabel = 'Save Job' }) => {
  const [form, setForm] = useState(
    initialValues || {
      title: '',
      tradeSkill: '',
      jobType: 'apprenticeship',
      location: '',
      description: '',
      vacancies: 1,
      status: 'active',
      applicationDeadline: '',
    }
  );

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded border bg-white p-5">
      <TextInput label="Job Title" value={form.title} onChange={(e) => handleChange('title', e.target.value)} />
      <TextInput label="Trade Skill" value={form.tradeSkill} onChange={(e) => handleChange('tradeSkill', e.target.value)} />
      <SelectInput label="Job Type" value={form.jobType} onChange={(e) => handleChange('jobType', e.target.value)}>
        <option value="apprenticeship">Apprenticeship</option>
        <option value="full-time">Full-time</option>
        <option value="part-time">Part-time</option>
        <option value="contract">Contract</option>
      </SelectInput>
      <TextInput label="Location" value={form.location} onChange={(e) => handleChange('location', e.target.value)} />
      <TextInput label="Vacancies" type="number" value={form.vacancies} onChange={(e) => handleChange('vacancies', e.target.value)} />
      <TextInput label="Application Deadline" type="date" value={form.applicationDeadline} onChange={(e) => handleChange('applicationDeadline', e.target.value)} />
      <SelectInput label="Status" value={form.status} onChange={(e) => handleChange('status', e.target.value)}>
        <option value="active">Active</option>
        <option value="draft">Draft</option>
        <option value="paused">Paused</option>
        <option value="closed">Closed</option>
      </SelectInput>
      <TextArea label="Description" value={form.description} onChange={(e) => handleChange('description', e.target.value)} />
      <button className="rounded bg-black px-4 py-2 text-white">{submitLabel}</button>
    </form>
  );
};

export default JobForm;
