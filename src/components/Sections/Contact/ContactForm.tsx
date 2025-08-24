import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const [submitMessage, setSubmitText] = useState('Send Message');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      setSubmitText('Submitting...');

      const response = await fetch('https://new-express-project-one-coral.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        console.error('HTTP error', response.status);
        setSubmitText('Send Message');
        setIsSubmitting(false);
      } else {
        console.log('Data sent successfully');
        setSubmitText('Submitted');
        setData(defaultData); // Reset form fields
        setTimeout(() => {
          setSubmitText('Send Message');
          setIsSubmitting(false);
        }, 5000);
      }
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
        value={data.name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      <button
        aria-label="Submit contact form"
        className={`w-max rounded-full border-2 border-orange-600 px-4 py-2 text-sm font-medium shadow-md outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800 ${submitMessage === 'Submitted' ? 'bg-orange-600 text-white' : 'bg-stone-900 text-white hover:bg-stone-800'}`}
        type="submit"
        disabled={isSubmitting && submitMessage !== 'Submitted!'}
      >
        {submitMessage}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
