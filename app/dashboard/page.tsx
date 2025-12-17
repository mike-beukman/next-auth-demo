import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total Revenue", value: "$45,231.89", change: "+20.1%", up: true },
  { label: "Subscriptions", value: "2,350", change: "+180.1%", up: true },
  { label: "Sales", value: "12,234", change: "+19%", up: true },
  { label: "Active Now", value: "573", change: "-2%", up: false },
];

const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
  },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
  },
  { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
];

const projects = [
  {
    name: "Website Redesign",
    status: "In Progress",
    progress: 65,
    dueDate: "Dec 24",
  },
  { name: "Mobile App", status: "Planning", progress: 20, dueDate: "Jan 15" },
  {
    name: "API Integration",
    status: "Completed",
    progress: 100,
    dueDate: "Dec 10",
  },
  {
    name: "Database Migration",
    status: "In Progress",
    progress: 45,
    dueDate: "Dec 30",
  },
];

export default async function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <span
                  className={`text-sm font-medium ${
                    stat.up ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Recent Sales */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Sales
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You made 265 sales this month.
              </p>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {recentSales.map((sale) => (
                <div
                  key={sale.email}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      {sale.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {sale.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {sale.email}
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold text-emerald-600">
                    {sale.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Projects
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Track your ongoing projects.
              </p>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {projects.map((project) => (
                <div key={project.name} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {project.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Due {project.dueDate}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                          : project.status === "In Progress"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                      <div
                        className={`h-full rounded-full ${
                          project.status === "Completed"
                            ? "bg-emerald-500"
                            : "bg-blue-500"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Quick Actions
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button>Create New Project</Button>
            <Button variant="outline">Generate Report</Button>
            <Button variant="secondary">Invite Team Member</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
