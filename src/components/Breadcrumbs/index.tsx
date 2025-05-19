import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadCrumbs({
  breadcrumbs,
  className = "",
}: {
  breadcrumbs: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          if (isLast) {
            return (
              <BreadcrumbPage
                className="max-w-[10ch] truncate"
                key={breadcrumb.label}
              >
                {breadcrumb.label}
              </BreadcrumbPage>
            );
          }

          return (
            <Fragment key={breadcrumb.label}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={breadcrumb.href}
                  className="max-w-[10ch] truncate"
                >
                  {breadcrumb.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
