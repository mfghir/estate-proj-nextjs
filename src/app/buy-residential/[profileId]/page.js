import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";

const ProfileDetail = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  console.log(profile);

  if (!profile) return <h3>مشکلی پیش آمده است</h3>;

  return <DetailsPage data={profile} />;
};

export default ProfileDetail;

export const generateMetaData = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  return {
    title: profile.title,
    description: profile.description,
    authors: { name: profile.realState },
    other: { mytag: "تست" },
  };
};
