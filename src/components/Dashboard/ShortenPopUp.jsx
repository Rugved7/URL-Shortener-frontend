import { useQueryClient } from '@tanstack/react-query';
import CreateNewShorten from './CreateNewShorten';

const ShortenPopUp = ({ open, setOpen }) => {
    const queryClient = useQueryClient();

    const handleRefetch = async () => {
        await queryClient.invalidateQueries(['myShortUrls']);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
            <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md m-4 animate-modalSlide">
                <CreateNewShorten 
                    setOpen={setOpen} 
                    refetch={handleRefetch}
                />
            </div>
        </div>
    );
};

export default ShortenPopUp;

