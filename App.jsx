import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Menu, X, ArrowRight, Shield, RefreshCw, Database, Cloud, CheckCircle, Mail, MapPin, Sparkles, Activity } from 'lucide-react'
import './App.css'

// Import assets
import heroBackground from './assets/hero_background.png'
import dataGovernanceIcon from './assets/data_governance_icon.png'
import dataMigrationIcon from './assets/data_migration_icon.png'
import dataIngestionIcon from './assets/data_ingestion_icon.png'
import databricksLogo from './assets/databricks_logo.png'
import awsLogo from './assets/aws_logo.png'
import azureLogo from './assets/azure_logo.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Send form data to backend
      const response = await fetch('https://40vhlizceq6l.manus.space/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (response.ok) {
        alert(result.message)
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        alert(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please check your connection and try again.')
    }
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Kentry Ops
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-slate-200 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-slate-200 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors">
                  About Us
                </button>
                <button onClick={() => scrollToSection('services')} className="text-slate-200 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('technologies')} className="text-slate-200 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors">
                  Technologies
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-slate-200 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-200 hover:text-cyan-300 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950 border-t border-slate-800">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-300 w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-300 w-full text-left">
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-300 w-full text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('technologies')} className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-300 w-full text-left">
                Technologies
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-300 w-full text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-900 to-slate-950"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 futuristic-grid" />
        <div className="absolute -top-24 -right-16 glow-orb glow-orb-cyan" />
        <div className="absolute bottom-0 left-0 glow-orb glow-orb-purple" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80 mb-6">
            kentryops.com
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Build the{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Future of Data
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
            A futuristic data consulting studio for Databricks, cloud platforms, and functionalytics that
            turn operations into intelligent, automated advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 text-lg shadow-lg shadow-cyan-500/30"
            >
              Start a Strategy Call <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline" 
              className="border-slate-200 text-slate-100 hover:bg-slate-100 hover:text-slate-900 px-8 py-3 text-lg"
            >
              Explore Services
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: '99.9% Pipeline Reliability', value: 'Always-on data operations' },
              { label: '30% Faster Time-to-Insight', value: 'Streaming + batch architectures' },
              { label: 'Zero Trust Governance', value: 'Compliance by design' }
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-left">
                <p className="text-cyan-200 font-semibold">{stat.label}</p>
                <p className="text-sm text-slate-300 mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow Visualization */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="flex flex-col space-y-4 text-white/80">
            <div className="flex items-center space-x-4">
              <div className="glass-card rounded-lg px-4 py-2">
                <span className="text-sm font-medium">SIGNAL INGESTION</span>
              </div>
              <ArrowRight className="text-white/70" size={20} />
            </div>
            <div className="flex items-center space-x-4 ml-8">
              <div className="glass-card rounded-lg px-4 py-2">
                <span className="text-sm font-medium">AUTONOMOUS PIPELINES</span>
              </div>
              <ArrowRight className="text-white/70" size={20} />
            </div>
            <div className="flex items-center space-x-4 ml-16">
              <div className="glass-card rounded-lg px-4 py-2">
                <span className="text-sm font-medium">FUNCTIONALYTICS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modern Data Consulting
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We build resilient data ecosystems with automation, observability, and intelligent analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img src={dataGovernanceIcon} alt="Data Governance" className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Data Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  Ensuring data quality, compliance, and accessibility across your organization with robust governance frameworks and best practices.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    Data Quality Management
                  </li>
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    Compliance & Security
                  </li>
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    Access Control & Lineage
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img src={dataMigrationIcon} alt="Data Migration" className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Data Migration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  Seamless and secure migration across environments, ensuring zero data loss and minimal downtime during transitions.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    Cloud Migration Strategy
                  </li>
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    Zero Downtime Transfers
                  </li>
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    Data Validation & Testing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img src={dataIngestionIcon} alt="Data Ingestion Pipelines" className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Intelligent Pipelines</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  Custom ingestion flows using AWS, Azure, OneLakehouse, and Duck Lake for real-time and batch processing.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    Real-time & Batch Processing
                  </li>
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    Multi-Cloud Integration
                  </li>
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    Scalable Architecture
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400/30">
                  <Activity className="text-cyan-300" size={32} />
                </div>
                <CardTitle className="text-xl font-bold text-white">Functionalytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  Operational analytics that connect business outcomes, product telemetry, and AI forecasting in one command layer.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    KPI Intelligence & Experimentation
                  </li>
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    Real-time Observability
                  </li>
                  <li className="flex items-center text-sm text-slate-200">
                    <CheckCircle className="text-cyan-300 mr-2" size={16} />
                    AI Decision Streams
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leveraging cutting-edge technologies to deliver scalable, secure, and efficient data solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg border border-slate-800 bg-slate-900/60 hover:shadow-lg transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-4">
                <img src={databricksLogo} alt="Databricks" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Databricks</h3>
              <p className="text-slate-300">
                Advanced data engineering and analytics platform for unified data processing and machine learning workflows.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-slate-800 bg-slate-900/60 hover:shadow-lg transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-4">
                <img src={awsLogo} alt="AWS" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Amazon Web Services</h3>
              <p className="text-slate-300">
                Comprehensive cloud infrastructure and data services for scalable, reliable data processing solutions.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-slate-800 bg-slate-900/60 hover:shadow-lg transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-4">
                <img src={azureLogo} alt="Azure" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Microsoft Azure</h3>
              <p className="text-slate-300">
                Enterprise-grade cloud platform with robust data analytics and AI capabilities for modern data architectures.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
              <Database className="w-12 h-12 mx-auto mb-4 text-cyan-300" />
              <h3 className="text-xl font-bold text-white mb-2">OneLakehouse</h3>
              <p className="text-slate-300">
                Modern data lakehouse architecture combining the best of data lakes and data warehouses for unified analytics.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
              <Cloud className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold text-white mb-2">Duck Lake</h3>
              <p className="text-slate-300">
                High-performance analytical database for fast query processing and real-time analytics on large datasets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About Kentry Ops
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                We are a forward-thinking data consultancy with a deep focus on Databricks and modern cloud solutions. 
                Our mission is to help organizations harness the power of data through intelligent, scalable, and secure architectures.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                With expertise in advanced data engineering, cloud platforms, and cutting-edge technologies, we specialize in 
                implementing solutions for real-time and batch processing that drive business value.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-cyan-300 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Enterprises</h4>
                    <p className="text-slate-300">Looking to modernize their data infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-cyan-300 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Organizations</h4>
                    <p className="text-slate-300">Migrating to cloud-native solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-cyan-300 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Data-driven Teams</h4>
                    <p className="text-slate-300">Looking for reliable ingestion and governance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg p-8 text-white border border-slate-700 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-cyan-300" size={24} />
                    <span>Advanced Data Engineering with Databricks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Cloud className="text-cyan-300" size={24} />
                    <span>Integration with AWS & Azure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="text-cyan-300" size={24} />
                    <span>Scalable, Secure Architectures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="text-cyan-300" size={24} />
                    <span>Real-time & Batch Processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sparkles className="text-cyan-300" size={24} />
                    <span>AI-Driven Functionalytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Modernize Your Data Infrastructure?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get in touch with our experts to discuss how we can help transform your data operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-cyan-300" size={24} />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-slate-300">hello@kentryops.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-cyan-300" size={24} />
                  <div>
                    <p className="font-semibold text-white">Locations</p>
                    <p className="text-slate-300">Adelaide & Melbourne, Australia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="text-cyan-300" size={24} />
                  <div>
                    <p className="font-semibold text-white">Specialization</p>
                    <p className="text-slate-300">Data Operations, Integrations and Data Consulting</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Cloud className="text-cyan-300" size={24} />
                  <div>
                    <p className="font-semibold text-white">Focus</p>
                    <p className="text-slate-300">Cloud Data Warehouse and Data Stack</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900 border-slate-700 text-slate-100"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900 border-slate-700 text-slate-100"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-200 mb-2">
                    Company
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border-slate-700 text-slate-100"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-slate-900 border-slate-700 text-slate-100"
                    placeholder="Tell us about your data challenges and how we can help..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-3 shadow-lg shadow-cyan-500/30"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
              Kentry Ops
            </h3>
            <p className="text-gray-400 mb-2">Data Operations, Integrations and Data Consulting</p>
            <p className="text-gray-400 mb-6">Cloud Data Warehouse and Data Stack</p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 Kentry Ops. All rights reserved. | hello@kentryops.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
