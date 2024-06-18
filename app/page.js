import Search from "@/components/Search/page";
import JobsList from "@/components/jobList/page";
export default function Home() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between">
          <div className="Heading">
            <h3 className="text-white text-4xl font-bold">
              Transform Career Path with <strong>JobFleet</strong>
            </h3>
            <p className="text-white text-lg">
              Speed up your job search or recruitment with JobConnect. We connect professionals with top companies,<br />
              enhancing careers and organizational success.
            </p>
          </div>
        </div>
      </div>
      <Search />
      <JobsList/>
    </div>
  );
}
