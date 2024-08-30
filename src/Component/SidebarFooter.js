import profile from '../asset/profile.svg'
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronUp } from '@mdi/js';
import { memo } from 'react';
function SidebarFooter({ handleRight }) {
    const open = !handleRight ? 0 : -90
    return (
        <>
            <div className='flex flex-row w-full'>
                <div className='avatar basis-1/4'>
                    <img src={profile} width={20} height={20} className='absolute bottom-5 av-img' />
                </div>
                <div className='ml-3 mt-1.5 basis-1/60'>
                    <p className='text-base1 text-rhino font-bold'>EMS Infilon</p>
                    <p className='text-base1'><span className='bg-green-300 inline-block rounded w-2 h-2'></span> Harnil Kadia</p>
                </div>
                <div className='flex items-center'>
                    <Icon path={mdiChevronRight} rotate={open} className='text-gray1 text-xs transition-transform duration-300 ease-in-out' size={1} />
                </div>
            </div>
        </>
    )
}
export default memo(SidebarFooter)