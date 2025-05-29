import PageHeader from "../../components/PageHeader/PageHeader";
import JobsList from "./JobsList";



const breadcrumb = [
  { label: "Home", link: "/" },
  { label: "Job-list" }
];

const JobsListPage = () => (
  <>
    <PageHeader title="Find A Job" breadcrumb={breadcrumb} />
    <JobsList />
  </>
);

export default JobsListPage;