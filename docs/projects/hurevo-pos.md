# Hurevo POS: Product overview

Hurevo POS is a modern, high-performance point-of-sale solution designed as the frontline retail companion to the comprehensive **Hurevo ERP** ecosystem. Built specifically to handle the dynamic environments of retail and food & beverage MSMEs (Micro, Small, and Medium Enterprises), this application ensures businesses can process transactions seamlessly without worrying about connectivity drops, all while feeding critical data back into their central ERP system.

## Core value proposition: Uninterrupted operations

One of the biggest challenges for retail operations is the reliance on stable internet connectivity. Hurevo POS addresses this with its robust **offline-first architecture**. Cashiers can continue to operate, process sales, and manage customers even when the internet goes down. Once the connection is restored, the POS silently and securely synchronizes all queued data back to the core Hurevo ERP system. This guarantees that business owners never lose a sale due to technical infrastructure issues.

## Deep ERP integration: Bankability from the storefront

Because Hurevo POS is a core module of Hurevo ERP, every transaction processed at the storefront immediately contributes to the business's overall **Bankability** (Kesiapan Modal).

When a sale is finalized and synced:
*   Inventory levels in the supply chain module are updated in real-time.
*   Accounting journals are automatically generated following SAK EMKM standards.
*   Management dashboards instantly reflect the new revenue.

This eliminates manual data entry, reduces human error, and ensures the business's financial records are always audit-ready.

## Key features and capabilities

Hurevo POS provides a complete toolkit for frontend retail management:

*   **Offline-first transaction engine:** Process sales, scan barcodes, and generate receipts with zero latency, entirely offline.
*   **Integrated HRIS (Attendance):** Staff can clock in and out directly from the POS interface using geofencing and camera-based selfie verification, feeding data directly to the ERP's HR module.
*   **Hardware compatibility:** Seamlessly connects with standard retail hardware, including Bluetooth thermal printers (58mm and 80mm) and barcode scanners.
*   **Multi-branch and localized settings:** Operates across multiple store locations, syncing location-specific inventory, organization branding, and settings dynamically.
*   **Performance and reliability:** Provides a native-like experience optimized for tablets and mobile devices.

## Technical architecture

The POS is engineered using cutting-edge technologies to guarantee cross-platform compatibility, smooth performance, and enterprise-grade security.

*   **Application platform:** Built as a modern Single Page Application (SPA) using React 19 and Vite for lightning-fast load times.
*   **Native deployment:** Wrapped with Capacitor, enabling the deployment of the exact same codebase to Android, iOS, and the web while retaining access to native device features (Camera, Bluetooth, Geolocation).
*   **Local persistence:** Utilizes Dexie.js (IndexedDB) for complex local data management, enabling the offline capabilities and sync queues.
*   **State management:** Uses Zustand for blazing-fast, predictable global state resolution across the application and TanStack Query for data fetching/synchronization.
*   **UI/UX design:** Features a premium, responsive interface built with Tailwind CSS, optimized for touch-first interactions.

## Licensing and ecosystem

As a companion application to Hurevo ERP, the POS shares the same single-tenant deployment philosophy. Organizations deploy the POS directly to their retail branches, where it securely connects to their isolated, dedicated ERP backend. This structure protects customer privacy, prevents cross-tenant data leaks, and provides businesses with complete ownership over their retail operations data.
