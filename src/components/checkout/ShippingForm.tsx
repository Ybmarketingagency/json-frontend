import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface ShippingFormProps {
  onSubmit: (data: any) => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { cartTotal } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="mb-8">
        <Link to="/cart" className="text-gray-600 hover:text-gray-900 flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Terug naar winkelwagen
        </Link>
      </div>

      <h1 className="text-2xl font-semibold mb-6">Verzendgegevens</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Voornaam *
            </label>
            <input
              type="text"
              {...register('firstName', { required: true })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Achternaam *
            </label>
            <input
              type="text"
              {...register('lastName', { required: true })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            E-mail *
          </label>
          <input
            type="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            className={`w-full px-4 py-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bedrijfsnaam (optioneel)
          </label>
          <input
            type="text"
            {...register('company')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Land/regio *
          </label>
          <select
            {...register('country', { required: true })}
            className={`w-full px-4 py-2 border rounded-lg ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Selecteer een land</option>
            <option value="NL">Nederland</option>
            <option value="BE">België</option>
            <option value="LU">Luxemburg</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Straatnaam *
          </label>
          <input
            type="text"
            {...register('street', { required: true })}
            className={`w-full px-4 py-2 border rounded-lg ${errors.street ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Huisnummer *
            </label>
            <input
              type="text"
              {...register('houseNumber', { required: true })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.houseNumber ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postcode *
            </label>
            <input
              type="text"
              {...register('postalCode', { required: true })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Plaats *
          </label>
          <input
            type="text"
            {...register('city', { required: true })}
            className={`w-full px-4 py-2 border rounded-lg ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telefoonnummer *
          </label>
          <input
            type="tel"
            {...register('phone', { required: true })}
            className={`w-full px-4 py-2 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>

        <div className="border-t pt-6 mt-8">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Subtotaal</span>
            <span className="font-medium">€{cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Verzendkosten</span>
            <span className="font-medium">€20.00</span>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <span>Totaal (incl. BTW)</span>
            <span>€{(cartTotal + 20).toFixed(2)}</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors"
        >
          Doorgaan naar betaling
        </button>
      </form>
    </div>
  );
};

export default ShippingForm;