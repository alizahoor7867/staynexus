import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
    DocumentTextIcon,
    PlusIcon,
    MagnifyingGlassIcon,
    FunnelIcon,
    PrinterIcon,
    EyeIcon,
    CheckCircleIcon,
    ClockIcon,
    XCircleIcon,
    ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import SuperAdminLayout from '../../Layouts/SuperAdminLayout';

export default function Invoices() {
    const [showModal, setShowModal] = useState(false);
    const [showPrintModal, setShowPrintModal] = useState(false);
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [formData, setFormData] = useState({
        hostelName: '',
        ownerName: '',
        email: '',
        amount: '',
        dueDate: '',
        description: ''
    });

    const invoices = [
        { id: 'INV-001', hostelName: 'Sunrise Student Residence', ownerName: 'Ahmed Khan', amount: 25000, dueDate: '2024-02-15', status: 'paid', paidDate: '2024-02-10' },
        { id: 'INV-002', hostelName: 'Green Valley Hostel', ownerName: 'Sara Ali', amount: 18000, dueDate: '2024-02-20', status: 'pending', paidDate: null },
        { id: 'INV-003', hostelName: 'City Center Lodge', ownerName: 'Hassan Sheikh', amount: 22000, dueDate: '2024-01-25', status: 'overdue', paidDate: null },
        { id: 'INV-004', hostelName: 'Campus View Hostel', ownerName: 'Fatima Malik', amount: 30000, dueDate: '2024-02-18', status: 'paid', paidDate: '2024-02-15' },
        { id: 'INV-005', hostelName: 'Modern Living Space', ownerName: 'Ali Raza', amount: 20000, dueDate: '2024-02-25', status: 'pending', paidDate: null },
    ];

    const stats = [
        { label: 'Total Revenue', value: '₹115,000', color: 'emerald' },
        { label: 'Pending', value: '₹38,000', color: 'yellow' },
        { label: 'Overdue', value: '₹22,000', color: 'red' },
        { label: 'This Month', value: '₹93,000', color: 'blue' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Invoice created:', formData);
        setShowModal(false);
        setFormData({ hostelName: '', ownerName: '', email: '', amount: '', dueDate: '', description: '' });
    };

    const handlePrint = (invoice) => {
        setSelectedInvoice(invoice);
        setShowPrintModal(true);
    };

    const printInvoice = () => {
        window.print();
    };

    const downloadPDF = () => {
        console.log('Downloading PDF for invoice:', selectedInvoice.id);
    };

    const filteredInvoices = invoices.filter(inv => {
        const matchesSearch = inv.hostelName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            inv.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            inv.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'all' || inv.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    return (
        <SuperAdminLayout currentPage="invoices">
            <Head title="Invoice Management" />
            
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20"
                        >
                            <p className="text-gray-600 text-sm font-semibold mb-2">{stat.label}</p>
                            <p className={`text-3xl font-black text-${stat.color}-600`}>{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Actions Bar */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-white/20">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="flex gap-4 w-full md:w-auto">
                            <div className="relative flex-1 md:w-80">
                                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search invoices..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                />
                            </div>
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            >
                                <option value="all">All Status</option>
                                <option value="paid">Paid</option>
                                <option value="pending">Pending</option>
                                <option value="overdue">Overdue</option>
                            </select>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowModal(true)}
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-xl font-semibold flex items-center gap-2 hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg"
                        >
                            <PlusIcon className="h-5 w-5" />
                            Create Invoice
                        </motion.button>
                    </div>
                </div>

                {/* Invoices Table */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50/50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Invoice ID</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Hostel</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Owner</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Due Date</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white/50 divide-y divide-gray-200">
                                {filteredInvoices.map((invoice) => (
                                    <tr key={invoice.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="font-bold text-gray-900">{invoice.id}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-semibold text-gray-900">{invoice.hostelName}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-gray-700">{invoice.ownerName}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="font-bold text-gray-900">₹{invoice.amount.toLocaleString()}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-gray-700">{invoice.dueDate}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                                                invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                                                invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                                {invoice.status === 'paid' && <CheckCircleIcon className="h-4 w-4 mr-1" />}
                                                {invoice.status === 'pending' && <ClockIcon className="h-4 w-4 mr-1" />}
                                                {invoice.status === 'overdue' && <XCircleIcon className="h-4 w-4 mr-1" />}
                                                {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handlePrint(invoice)}
                                                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                                    title="View & Print"
                                                >
                                                    <EyeIcon className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() => handlePrint(invoice)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                    title="Print"
                                                >
                                                    <PrinterIcon className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Create Invoice Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-black text-gray-900">Create New Invoice</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Hostel Name</label>
                                    <input
                                        type="text"
                                        value={formData.hostelName}
                                        onChange={(e) => setFormData({...formData, hostelName: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Owner Name</label>
                                    <input
                                        type="text"
                                        value={formData.ownerName}
                                        onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Amount (₹)</label>
                                    <input
                                        type="number"
                                        value={formData.amount}
                                        onChange={(e) => setFormData({...formData, amount: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Due Date</label>
                                    <input
                                        type="date"
                                        value={formData.dueDate}
                                        onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    rows="3"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                />
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg"
                                >
                                    Create Invoice
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}

            {/* Print/View Invoice Modal */}
            {showPrintModal && selectedInvoice && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowPrintModal(false)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Action Buttons */}
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center print:hidden">
                            <h2 className="text-xl font-black text-gray-900">Invoice Preview</h2>
                            <div className="flex gap-3">
                                <button
                                    onClick={downloadPDF}
                                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2"
                                >
                                    <ArrowDownTrayIcon className="h-5 w-5" />
                                    Download PDF
                                </button>
                                <button
                                    onClick={printInvoice}
                                    className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all flex items-center gap-2"
                                >
                                    <PrinterIcon className="h-5 w-5" />
                                    Print
                                </button>
                                <button
                                    onClick={() => setShowPrintModal(false)}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        {/* Invoice Content */}
                        <div className="p-12 bg-white" id="invoice-content">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h1 className="text-4xl font-black text-gray-900 mb-2">INVOICE</h1>
                                    <p className="text-gray-600 font-semibold">StayNexus Platform</p>
                                    <p className="text-gray-600">Hostel Management System</p>
                                </div>
                                <div className="text-right">
                                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-3">
                                        <DocumentTextIcon className="h-12 w-12 text-white" />
                                    </div>
                                    <p className="text-sm text-gray-600">Invoice Date</p>
                                    <p className="font-bold text-gray-900">{new Date().toLocaleDateString()}</p>
                                </div>
                            </div>

                            {/* Invoice Details */}
                            <div className="grid grid-cols-2 gap-8 mb-8 p-6 bg-gray-50 rounded-xl">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-600 uppercase mb-3">Bill To:</h3>
                                    <p className="font-bold text-lg text-gray-900">{selectedInvoice.ownerName}</p>
                                    <p className="text-gray-700 font-semibold">{selectedInvoice.hostelName}</p>
                                </div>
                                <div className="text-right">
                                    <h3 className="text-sm font-bold text-gray-600 uppercase mb-3">Invoice Details:</h3>
                                    <p className="text-gray-700"><span className="font-bold">Invoice #:</span> {selectedInvoice.id}</p>
                                    <p className="text-gray-700"><span className="font-bold">Due Date:</span> {selectedInvoice.dueDate}</p>
                                    <p className="text-gray-700">
                                        <span className="font-bold">Status:</span> 
                                        <span className={`ml-2 px-3 py-1 text-xs font-bold rounded-full ${
                                            selectedInvoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                                            selectedInvoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {selectedInvoice.status.toUpperCase()}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Invoice Items */}
                            <table className="w-full mb-8">
                                <thead>
                                    <tr className="border-b-2 border-gray-300">
                                        <th className="text-left py-3 font-bold text-gray-700">Description</th>
                                        <th className="text-right py-3 font-bold text-gray-700">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-4 text-gray-700">Monthly Platform Fee</td>
                                        <td className="py-4 text-right font-semibold text-gray-900">₹{selectedInvoice.amount.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Total */}
                            <div className="flex justify-end mb-8">
                                <div className="w-64">
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-700 font-semibold">Subtotal:</span>
                                        <span className="font-bold text-gray-900">₹{selectedInvoice.amount.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-700 font-semibold">Tax (0%):</span>
                                        <span className="font-bold text-gray-900">₹0</span>
                                    </div>
                                    <div className="flex justify-between py-3 bg-emerald-50 px-4 rounded-xl mt-2">
                                        <span className="text-lg font-black text-gray-900">Total:</span>
                                        <span className="text-2xl font-black text-emerald-600">₹{selectedInvoice.amount.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="border-t-2 border-gray-200 pt-6 text-center">
                                <p className="text-gray-600 mb-2">Thank you for your business!</p>
                                <p className="text-sm text-gray-500">For any queries, contact us at support@staynexus.com</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </SuperAdminLayout>
    );
}
