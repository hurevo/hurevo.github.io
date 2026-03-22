import { createFileRoute } from '@tanstack/react-router';
import { HCSSection } from '@/components/sections/HCSSection';
import { SEOMeta } from '@/components/seo/SEOMeta';

export const Route = createFileRoute('/cloud')({
    component: CloudPage,
});

function CloudPage() {
    return (
        <div className="w-full min-h-screen bg-background">
            <SEOMeta 
                title="Hurevo Cloud Services | Managed Hosting Indonesia"
                description="Managed Cloud Hosting untuk Developer Indonesia. WordPress, Laravel, dan n8n hosting dengan dukungan lokal dan harga terjangkau."
            />
            <HCSSection />
        </div>
    );
}

export default CloudPage;
