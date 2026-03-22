import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Code2, 
  Workflow, 
  Briefcase, 
  Check, 
  Shield, 
  Clock, 
  Headphones, 
  Wallet,
  Server,
  ArrowRight,
  Sparkles
} from 'lucide-react';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function HCSSection() {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 'wordpress-managed',
      name: m.hcsWordPressTitle?.() || 'WordPress Managed',
      description: m.hcsWordPressDesc?.() || 'Hosting terkelola untuk website WordPress Anda.',
      price: 'Rp 99K',
      priceNote: m.hcsPriceNote?.() || '-149K/bulan',
      icon: <Cloud className="w-6 h-6" />,
      features: [
        m.hcsFeatureServerSetup?.() || 'Server setup & maintenance',
        m.hcsFeatureSSL?.() || 'SSL certificate included',
        m.hcsFeatureBackups?.() || 'Weekly backups',
        m.hcsFeatureWPUpdates?.() || 'WordPress updates',
      ],
      idealFor: m.hcsWordPressIdeal?.() || 'Company profiles, blogs, brochures, simple online stores',
      popular: false,
    },
    {
      id: 'laravel-managed',
      name: m.hcsLaravelTitle?.() || 'Laravel Managed',
      description: m.hcsLaravelDesc?.() || 'Hosting terkelola untuk aplikasi Laravel Anda.',
      price: 'Rp 199K',
      priceNote: m.hcsPriceNote2?.() || '-349K/bulan',
      icon: <Code2 className="w-6 h-6" />,
      features: [
        m.hcsFeatureServerSetup?.() || 'Server setup & configuration',
        m.hcsFeatureDB?.() || 'Database creation & management',
        m.hcsFeatureSSL?.() || 'SSL certificate included',
        m.hcsFeatureScheduledBackups?.() || 'Scheduled backups',
        m.hcsFeatureMonitoring?.() || 'Basic monitoring',
      ],
      idealFor: m.hcsLaravelIdeal?.() || 'Custom apps, dashboards, admin panels, APIs',
      popular: true,
    },
    {
      id: 'n8n-managed',
      name: m.hcsN8nTitle?.() || 'n8n Managed',
      description: m.hcsN8nDesc?.() || 'Instance n8n yang berjalan 24/7 untuk otomasi bisnis.',
      price: 'Rp 79K',
      priceNote: m.hcsPriceNote3?.() || '-149K/bulan',
      icon: <Workflow className="w-6 h-6" />,
      features: [
        m.hcsFeatureN8nInstance?.() || 'n8n instance running 24/7',
        m.hcsFeatureStorage?.() || 'Persistent storage',
        m.hcsFeatureSSL?.() || 'SSL certificate included',
        m.hcsFeatureBackups?.() || 'Regular backups',
      ],
      idealFor: m.hcsN8nIdeal?.() || 'WhatsApp follow-ups, payment notifications, order syncing',
      popular: false,
    },
    {
      id: 'agency-bundle',
      name: m.hcsAgencyTitle?.() || 'Agency Bundle',
      description: m.hcsAgencyDesc?.() || 'Solusi lengkap untuk agency dengan multiple klien.',
      price: 'Rp 699K',
      priceNote: m.hcsPriceNote4?.() || '-1.2jt/bulan',
      icon: <Briefcase className="w-6 h-6" />,
      features: [
        m.hcsFeatureMultipleApps?.() || 'Multiple apps/sites under one account',
        m.hcsFeaturePrioritySupport?.() || 'Priority support',
        m.hcsFeatureMigration?.() || 'Migration assistance',
        m.hcsFeatureDiscount?.() || 'Volume pricing discounts',
      ],
      idealFor: m.hcsAgencyIdeal?.() || 'Freelancers and agencies with multiple client projects',
      popular: false,
    },
  ];

  const valueProps = [
    {
      id: 'indonesian-first',
      title: m.hcsValueIndonesianTitle?.() || 'Indonesian-First',
      description: m.hcsValueIndonesianDesc?.() || 'Harga dalam Rupiah, dukungan dalam Bahasa Indonesia, metode pembayaran lokal.',
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      id: 'no-server-knowledge',
      title: m.hcsValueNoServerTitle?.() || 'No Server Knowledge Needed',
      description: m.hcsValueNoServerDesc?.() || 'Pelanggan tidak perlu menyentuh terminal server. Kami handle semua teknis.',
      icon: <Server className="w-5 h-5" />,
    },
    {
      id: 'agency-friendly',
      title: m.hcsValueAgencyTitle?.() || 'Agency-Friendly',
      description: m.hcsValueAgencyDesc?.() || 'Dirancang untuk mengelola multiple proyek klien dengan mudah.',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: 'cloud-agnostic',
      title: m.hcsValueCloudTitle?.() || 'Cloud-Agnostic',
      description: m.hcsValueCloudDesc?.() || 'Bekerja di AWS, GCP, DigitalOcean, Vultr, dan lainnya.',
      icon: <Cloud className="w-5 h-5" />,
    },
  ];

  const trustSignals = [
    { icon: <Shield className="w-4 h-4" />, text: m.hcsTrustSecure?.() || 'SSL included' },
    { icon: <Clock className="w-4 h-4" />, text: m.hcsTrustUptime?.() || '99.9% uptime' },
    { icon: <Headphones className="w-4 h-4" />, text: m.hcsTrustSupport?.() || 'Support Bahasa Indonesia' },
    { icon: <Wallet className="w-4 h-4" />, text: m.hcsTrustPayment?.() || 'Bayar dengan QRIS/Transfer' },
  ];

  return (
    <section id="hcs-section" className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            {m.hcsBadge?.() || 'Hurevo Cloud Services'}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {m.hcsHeader?.() || 'Managed Cloud Hosting untuk Developer Indonesia'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {m.hcsSubheader?.() || 'Fokus pada bisnis Anda, biarkan kami mengelola server. Hosting terkelola untuk WordPress, Laravel, dan n8n dengan dukungan lokal.'}
          </p>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {trustSignals.map((signal) => (
            <div 
              key={signal.text} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border/50 text-sm text-muted-foreground"
            >
              {signal.icon}
              <span>{signal.text}</span>
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-lg flex flex-col h-full ${
                product.popular ? 'ring-2 ring-primary/20 border-primary/50' : ''
              }`}
            >
              {product.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-medium text-center py-1.5">
                  {m.hcsPopular?.() || 'Most Popular'}
                </div>
              )}
              <CardHeader className={product.popular ? 'pt-4' : ''}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {product.icon}
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="mb-4">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <span className="text-sm text-muted-foreground">{product.priceNote}</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{m.hcsIdealFor?.() || 'Ideal untuk:'}</span>{' '}
                    {product.idealFor}
                  </p>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full group"
                  onClick={scrollToContact}
                  variant={product.popular ? 'default' : 'outline'}
                >
                  {m.hcsCTA?.() || 'Get Started'}
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Value Propositions */}
        <div className="bg-background border border-border/50 rounded-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              {m.hcsWhyChooseHeader?.() || 'Mengapa Memilih HCS?'}
            </h3>
            <p className="text-muted-foreground">
              {m.hcsWhyChooseSubheader?.() || 'Kami memahami kebutuhan developer dan agency di Indonesia'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop) => (
              <div key={prop.id} className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/30">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary mb-3">
                  {prop.icon}
                </div>
                <h4 className="font-semibold mb-1.5">{prop.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {m.hcsBottomCTA?.() || 'Butuh solusi custom? Hubungi kami untuk diskusi lebih lanjut.'}
          </p>
          <Button size="lg" onClick={scrollToContact} className="group">
            {m.hcsBottomCTAButton?.() || 'Diskusikan Kebutuhan Anda'}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
