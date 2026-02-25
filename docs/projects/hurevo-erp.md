# Hurevo ERP: Product overview

Hurevo ERP is a comprehensive, single-tenant Enterprise Resource Planning (ERP) system designed specifically for micro, small, and medium enterprises (MSMEs). This document provides a high-level overview of the core features and technical capabilities that make Hurevo ERP an ideal solution to showcase in portfolios or offer to prospective clients.

## Core value proposition: Bankability

The foundation of Hurevo ERP is Bankability (Kesiapan Modal). Every financial transaction across the system automatically generates SAK EMKM-compliant double-entry journal entries. This automation ensures business owners always maintain audit-ready financial records, which simplifies tax preparation and increases their eligibility for external business funding.

## Key modules and features

Hurevo ERP integrates multiple essential business functions into a single, cohesive platform.

*   **Accounting:** Automates general ledger operations, manages chart of accounts, and ensures strict financial compliance.
*   **Customer Relationship Management (CRM):** Manages customer data, sales pipelines, and communication history to improve client retention.
*   **Supply Chain Management (SCM) and Inventory:** Tracks stock levels in real-time, handles product variations, and optimizes procurement workflows.
*   **Human Resources Information System (HRIS):** Streamlines employee data management, attendance tracking, and organizational structures.
*   **Point of Sale (POS):** Provides an offline-first companion mobile application that synchronizes transactions and inventory data seamlessly with the main ERP API.
*   **Payment Gateway:** Integrates secure processing for digital transactions, invoicing, and automated payment reconciliation.
*   **Financial Reports:** Delivers real-time insights through automated, comprehensive reporting dashboards and PDF generation.

## Technical architecture

The platform relies on a robust, modern technology stack to guarantee high performance, security, and scalability.

*   **Framework:** Built on Laravel 12.x utilizing strict typing and a dedicated service layer. This ensures business logic remains separated from controllers.
*   **Administration panel:** Uses Filament v4 combined with Livewire and Flux to provide a highly reactive, responsive user interface.
*   **Database architecture:** Uses PostgreSQL with UUID primary keys. The single-tenant deployment model ensures complete data isolation and privacy for each organization.
*   **API design:** Exposes a secure REST API via Laravel Sanctum, providing the backend infrastructure for the offline-first mobile POS application.
*   **Performance:** Runs on Laravel Octane to maximize application speed and handle concurrent requests efficiently.

## Deployment and licensing

Hurevo ERP operates on a license-based distribution model. The independent, single-tenant architecture lets you deploy completely isolated software instances for each client. This approach guarantees complete data ownership and security while maintaining a standardized, easily upgradable core product.
