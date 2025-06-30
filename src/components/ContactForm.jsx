
import { useForm } from "react-hook-form";
import {userNameValidation} from '../mytools/built-in-validation/built-in-validation';
import {StringValidationCheck,EmailValidationCheck} from '../mytools/custom-validation/CustomValidation'


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 px-3 max-w-2xl flex flex-wrap items-center justify-between"
    >
      {/* Name */}
      <div className="md:w-[49%] w-full">
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          {...register('name', {
            ...userNameValidation,
            ...StringValidationCheck,
          })}
          className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="md:w-[49%] w-full">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            ...EmailValidationCheck,
          })}
          className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Subject*/}
      <div className="w-full">
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <input
          id="subject"
          {...register('subject', {
            required: 'Subject is required',
            ...StringValidationCheck,
          })}
          className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your subject"
        />
        {errors.subject && (
          <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="w-full">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows="5"
          {...register('message', {
            required: 'Message is required',
            StringValidationCheck,
          })}
          className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Write your message here..."
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
