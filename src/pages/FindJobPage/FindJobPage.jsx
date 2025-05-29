import PageHeader from "../../components/PageHeader/PageHeader";


const breadcrumb = [
  { label: 'Home', link: '/' },
  { label: 'Find A Job' }
];

function FindJobPage() {
  return (
    <>
      <PageHeader title="Find A Job" breadcrumb={breadcrumb} />
      {/* ...rest of your page... */}
    </>
  );
}
export default FindJobPage;