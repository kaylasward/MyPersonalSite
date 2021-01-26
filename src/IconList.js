import linkedinOutlined from '@iconify-icons/ant-design/linkedin-outlined';
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled';

import mailOutlined from '@iconify-icons/ant-design/mail-outlined';
import mailTwotone from '@iconify-icons/ant-design/mail-twotone';

import fileTextOutlined from '@iconify-icons/ant-design/file-text-outlined';
import fileTextTwotone from '@iconify-icons/ant-design/file-text-twotone';

const IconList = [
    {
        name: "LinkedIn",
        noHover: linkedinOutlined,
        withHover: linkedinFilled,
        redirect: "https://www.linkedin.com/in/kaylasward/"
    },
    {
        name: "Email",
        noHover: mailOutlined,
        withHover: mailTwotone,
        redirect: "google.com"
    },
    {
        name: "Resumé",
        noHover: fileTextOutlined,
        withHover: fileTextTwotone,
        redirect: "google.com"
    }
]

export default IconList;