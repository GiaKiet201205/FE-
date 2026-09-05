import newsToeicOpening from "../assets/news/news-toeic-opening.jpg";
import newsEnglishWorkshop from "../assets/news/news-english-workshop.jpg";
import newsToeflStudent from "../assets/news/news-toefl-student.jpg";
import newsToeicClass from "../assets/news/news-toeic-class.jpg";
import newsTeacherCollaboration from "../assets/news/news-teacher-collaboration.jpg";
import newsMosDigitalSkills from "../assets/news/news-mos-digital-skills.jpg";
import newsStudyPlanning from "../assets/news/news-study-planning.jpg";
import newsOpenClassDay from "../assets/news/news-open-class-day.jpg";
import newsSpeakingPractice from "../assets/news/news-speaking-practice.jpg";
import newsListeningLesson from "../assets/news/news-listening-lesson.jpg";
import newsHolidayNotice from "../assets/news/news-holiday-notice.jpg";
import newsLearningTechnology from "../assets/news/news-learning-technology.jpg";
import newsEnglishClub from "../assets/news/news-english-club.jpg";
import newsBusinessPartnership from "../assets/news/news-business-partnership.jpg";
import newsMosProject from "../assets/news/news-mos-project.jpg";
import newsToeflJunior from "../assets/news/news-toefl-junior.jpg";
import newsSummerCourse from "../assets/news/news-summer-course.jpg";
import newsLearningCommunity from "../assets/news/news-learning-community.jpg";
import newsConferenceEducation from "../assets/news/news-conference-education.jpg";
import newsCertificateCeremony from "../assets/news/news-certificate-ceremony.jpg";
import newsLanguageLab from "../assets/news/news-language-lab.jpg";
import newsEducationSpeaker from "../assets/news/news-education-speaker.jpg";
import newsTeamLearning from "../assets/news/news-team-learning.jpg";
import newsOnlineClass from "../assets/news/news-online-class.jpg";
import newsStudentPresentation from "../assets/news/news-student-presentation.jpg";
import newsClassroomDiscussion from "../assets/news/news-classroom-discussion.jpg";
import newsDigitalWorkshop from "../assets/news/news-digital-workshop.jpg";
import newsLibraryStudy from "../assets/news/news-library-study.jpg";
import newsLectureHall from "../assets/news/news-lecture-hall.jpg";
import newsLearningLaptop from "../assets/news/news-learning-laptop.jpg";

const newsImages = [
    newsToeicOpening,
    newsEnglishWorkshop,
    newsToeflStudent,
    newsToeicClass,
    newsTeacherCollaboration,
    newsMosDigitalSkills,
    newsStudyPlanning,
    newsOpenClassDay,
    newsSpeakingPractice,
    newsListeningLesson,
    newsHolidayNotice,
    newsLearningTechnology,
    newsEnglishClub,
    newsBusinessPartnership,
    newsMosProject,
    newsToeflJunior,
    newsSummerCourse,
    newsLearningCommunity,
    newsConferenceEducation,
    newsCertificateCeremony,
    newsLanguageLab,
    newsEducationSpeaker,
    newsTeamLearning,
    newsOnlineClass,
    newsStudentPresentation,
    newsClassroomDiscussion,
    newsDigitalWorkshop,
    newsLibraryStudy,
    newsLectureHall,
    newsLearningLaptop,
];

function assignUniqueImages(articles) {
    let cursor = 0;
    const usedAcrossArticles = new Set(articles.map((article) => article.image));

    return articles.map((article) => {
        const usedInArticle = new Set([article.image]);
        const content = article.content.map((block) => {
            if (block.type !== "image") return block;

            const preferredIndex = newsImages.indexOf(block.src);
            const preferredIsAvailable = preferredIndex >= 0
                && !usedInArticle.has(block.src)
                && !usedAcrossArticles.has(block.src);
            let image = preferredIsAvailable ? block.src : null;

            if (!image) {
                for (let offset = 0; offset < newsImages.length; offset += 1) {
                    const candidateIndex = (cursor + offset) % newsImages.length;
                    const candidate = newsImages[candidateIndex];
                    if (!usedInArticle.has(candidate) && !usedAcrossArticles.has(candidate)) {
                        image = candidate;
                        cursor = (candidateIndex + 1) % newsImages.length;
                        break;
                    }
                }
            } else {
                cursor = (preferredIndex + 1) % newsImages.length;
            }

            usedInArticle.add(image);
            usedAcrossArticles.add(image);
            return { ...block, src: image };
        });

        return { ...article, content };
    });
}

const rawNewsData = [
    {
        id: 1,
        title: "Khai giảng khóa TOEIC ứng dụng cho người đi làm tháng 9",
        category: "Đào tạo",
        tags: ["TOEIC", "Khai giảng", "Người đi làm"],
        date: "03/09/2026",
        image: newsToeicOpening,
        description: "Lộ trình thực tế giúp học viên củng cố nền tảng tiếng Anh và tự tin sử dụng trong môi trường công việc.",
        content: [
            "IIG Training Center chính thức khai giảng khóa TOEIC ứng dụng dành cho người đi làm trong tháng 9, đáp ứng nhu cầu nâng cao năng lực tiếng Anh tại nơi công sở. Khóa học kéo dài 10 tuần với 30 buổi học, mỗi buổi 90 phút, được tổ chức theo lộ trình từ củng cố nền tảng đến luyện tập theo tình huống. Chương trình dự kiến đón 48 học viên chia thành hai lớp theo trình độ đầu vào. Đây là hoạt động đào tạo trọng điểm nhằm giúp người học biến kiến thức tiếng Anh thành năng lực sử dụng thực tế.",
            { type: "image", src: newsToeicClass, alt: "Học viên luyện tập tiếng Anh trong lớp học", caption: "Học viên thực hành các tình huống giao tiếp tiếng Anh tại lớp học TOEIC ứng dụng." },
            "Trong tuần đầu tiên, học viên được kiểm tra bốn kỹ năng và nhận bản phân tích năng lực cá nhân. Kết quả khảo sát đầu vào cho thấy 62% học viên cần ưu tiên kỹ năng nghe trong môi trường có tốc độ nói tự nhiên, trong khi 54% mong muốn cải thiện vốn từ chuyên ngành. Từ dữ liệu này, giảng viên điều chỉnh thời lượng luyện tập theo từng nhóm nhỏ. Mỗi học viên cũng được đặt một mục tiêu điểm số và một mục tiêu sử dụng tiếng Anh gắn với công việc.",
            "Nội dung khóa học được chia thành ba chặng rõ ràng. Chặng đầu tập trung vào cấu trúc câu, từ vựng nền và chiến lược đọc hiểu. Chặng thứ hai đưa người học vào các tình huống email, cuộc họp, cuộc gọi và trao đổi với khách hàng. Chặng cuối dành cho các bài mô phỏng, chữa lỗi theo nhóm kỹ năng và hướng dẫn quản lý thời gian trong phòng thi.",
            { type: "list", items: ["30 buổi học trong 10 tuần, kết hợp học trực tiếp và bài luyện tập sau lớp.", "Ba bài kiểm tra mô phỏng có phân tích kết quả theo từng kỹ năng.", "Bốn buổi thực hành tiếng Anh công sở với tình huống email, họp và thuyết trình.", "Tư vấn lộ trình cá nhân sau mỗi chặng học và trước kỳ thi mục tiêu."] },
            "Ông Nguyễn Minh An, Giám đốc Đào tạo IIG Training Center, chia sẻ: “Người đi làm cần một chương trình tôn trọng quỹ thời gian của họ và chỉ ra được kiến thức nào có thể dùng ngay. Vì vậy, mỗi bài học đều bắt đầu từ một tình huống cụ thể, sau đó mới hệ thống hóa ngữ pháp và từ vựng cần thiết”. Theo ông, tiêu chí thành công của khóa học không chỉ là điểm số mà còn là mức độ tự tin khi học viên viết một email hoặc trình bày ý tưởng bằng tiếng Anh.",
            "Bên cạnh giờ học chính, học viên được truy cập kho bài luyện ngắn theo ngày và tham gia nhóm phản hồi cùng giảng viên. Các bài luyện được thiết kế trong khoảng 15 đến 20 phút để phù hợp với lịch làm việc bận rộn. Sau mỗi tuần, hệ thống ghi nhận tỷ lệ hoàn thành và gợi ý nội dung cần ôn lại. Cách tiếp cận này giúp người học duy trì nhịp học đều thay vì dồn toàn bộ nỗ lực vào thời điểm gần kỳ thi.",
            { type: "image", src: newsToeicOpening, alt: "Nhóm học viên cùng trao đổi tài liệu TOEIC", caption: "Hoạt động trao đổi nhóm giúp học viên kết nối kiến thức TOEIC với công việc hằng ngày." },
            "Với mục tiêu ít nhất 80% học viên hoàn thành đủ bài luyện và tiến bộ tối thiểu một bậc đánh giá sau khóa học, chương trình sẽ được theo dõi bằng các mốc đo cụ thể. Kết quả từng giai đoạn được trao đổi trực tiếp để học viên hiểu mình đang tiến bộ ở đâu và cần bổ sung điều gì. Trung tâm cũng dự kiến mở buổi tư vấn thi thử miễn phí cho học viên hoàn thành chặng cuối. Đây là bước chuẩn bị thiết thực trước khi người học lựa chọn kỳ thi chính thức.",
            "Khóa TOEIC tháng 9 mở ra một hành trình học tập có mục tiêu, có phản hồi và gắn với nhu cầu nghề nghiệp. IIG Training Center kỳ vọng mô hình này sẽ tiếp tục được hoàn thiện qua phản hồi của học viên và giảng viên. Trong thời gian tới, trung tâm sẽ bổ sung thêm các chuyên đề Speaking và Writing cho người học cần sử dụng tiếng Anh chuyên sâu hơn. Những kết quả đầu tiên của khóa học sẽ được tổng hợp sau khi kết thúc bài đánh giá cuối kỳ.",
        ],
        featured: true,
    },
    {
        id: 2,
        title: "Workshop kỹ năng học tiếng Anh chủ động cùng giảng viên IIG",
        category: "Sự kiện",
        tags: ["Workshop", "Kỹ năng học", "Tiếng Anh"],
        date: "28/08/2026",
        image: newsEnglishWorkshop,
        description: "Cùng khám phá phương pháp xây dựng thói quen học tập bền vững và cá nhân hóa mục tiêu của bạn.",
        content: [
            "Workshop “Học tiếng Anh chủ động” được IIG Training Center tổ chức nhằm giúp học viên nhìn lại cách mình đang học và xây dựng một kế hoạch bền vững hơn. Sự kiện diễn ra trong một buổi chiều với 86 người tham dự, gồm học viên, phụ huynh và một số giáo viên tiếng Anh. Thay vì tập trung vào một mẹo làm bài đơn lẻ, chương trình đặt câu hỏi rộng hơn: làm thế nào để người học duy trì tiến bộ trong 12 tuần liên tục. Đây cũng là dịp để trung tâm lắng nghe những khó khăn thật trong quá trình tự học.",
            { type: "image", src: newsEnglishWorkshop, alt: "Học viên tham gia workshop tiếng Anh", caption: "Học viên thảo luận theo nhóm trong workshop về phương pháp học tiếng Anh chủ động." },
            "Phần đầu của workshop giới thiệu mô hình mục tiêu ba tầng gồm kết quả cần đạt, hành vi cần duy trì và bằng chứng tiến bộ. Người học được hướng dẫn chuyển một mục tiêu chung như “nâng cao tiếng Anh” thành những việc có thể quan sát, chẳng hạn hoàn thành ba phiên nghe mỗi tuần hoặc viết một đoạn phản hồi sau mỗi buổi học. Trong hoạt động thực hành, 74% người tham dự đã hoàn thành được bản kế hoạch bốn tuần đầu tiên. Nhiều học viên cho biết cách chia nhỏ nhiệm vụ khiến mục tiêu trở nên bớt xa vời.",
            "Một nội dung được quan tâm là cách lựa chọn tài liệu vừa sức. Giảng viên phân tích ba dấu hiệu cho thấy tài liệu đang quá khó: người học phải tra quá nhiều từ, không nắm được ý chính và không thể kể lại nội dung sau khi nghe. Ngược lại, tài liệu phù hợp cần tạo ra thử thách nhưng vẫn để người học nhận thấy mình đang hiểu và tiến bộ. Các nhóm được giao cùng xây dựng một tuần học mẫu dựa trên quỹ thời gian thực tế của từng thành viên.",
            { type: "list", items: ["Xác định một mục tiêu đo được trong bốn tuần.", "Duy trì tối thiểu ba phiên học ngắn mỗi tuần.", "Ghi lại lỗi lặp lại và chọn một cách sửa cụ thể.", "Đánh giá lại kế hoạch vào cuối mỗi tuần thay vì chờ đến cuối khóa."] },
            "Bà Lê Thu Hà, chuyên gia phát triển chương trình tại IIG Training Center, nhận định: “Tính chủ động không có nghĩa là học một mình. Người học chủ động là người biết đặt câu hỏi, biết tìm phản hồi và biết điều chỉnh phương pháp khi kết quả chưa như mong muốn”. Phát biểu này được minh họa bằng hoạt động phản hồi chéo, trong đó các nhóm góp ý cho kế hoạch của nhau dựa trên tiêu chí rõ ràng. Không khí trao đổi cởi mở giúp người tham dự nhìn thấy nhiều cách học khác nhau.",
            "Workshop cũng dành thời lượng cho việc sử dụng công nghệ một cách có chọn lọc. Học viên được giới thiệu cách dùng lịch nhắc, công cụ ghi âm và bảng theo dõi tiến độ để hỗ trợ thói quen học tập. Các công cụ không được xem là giải pháp thay thế cho việc luyện tập, mà là cách giảm bớt những thao tác lặp lại và giúp người học nhìn thấy dữ liệu của chính mình. Sau sự kiện, trung tâm mở một nhóm theo dõi 30 ngày cho những người muốn thực hành kế hoạch đã xây dựng.",
            { type: "image", src: newsStudyPlanning, alt: "Người học lập kế hoạch học tiếng Anh", caption: "Người tham dự xây dựng kế hoạch học tập cá nhân sau phần hướng dẫn của giảng viên." },
            "Kết quả khảo sát nhanh sau workshop cho thấy 91% người tham dự đánh giá nội dung có tính ứng dụng cao và 68% đăng ký nhận bộ tài liệu theo dõi tiến bộ. Những con số này cho thấy nhu cầu về phương pháp học rõ ràng đang tăng lên bên cạnh nhu cầu về khóa học. IIG Training Center sẽ tiếp tục tổ chức các buổi chia sẻ theo chủ đề, trong đó có quản lý thời gian, luyện phản xạ nói và chuẩn bị cho bài thi quốc tế. Mục tiêu cuối cùng là giúp người học duy trì được việc học sau khi sự kiện kết thúc.",
            "Workshop khép lại bằng một cam kết nhỏ nhưng cụ thể: mỗi người chọn một hành vi học tập để bắt đầu ngay trong tuần tiếp theo. Từ những thay đổi đều đặn đó, việc học tiếng Anh có thể trở thành một phần tự nhiên của lịch sinh hoạt. Trung tâm tin rằng một cộng đồng học tập biết chia sẻ và phản hồi sẽ tạo ra động lực lâu dài hơn. Các hoạt động tiếp nối sẽ được thiết kế dựa trên câu hỏi và nhu cầu do người tham dự gửi về.",
        ],
        featured: true,
    },
    {
        id: 3,
        title: "Học viên IIG Training Center chinh phục cột mốc TOEFL đầu tiên",
        category: "TOEFL",
        tags: ["TOEFL", "Học viên", "Tiếng Anh quốc tế"],
        date: "22/08/2026",
        image: newsToeflStudent,
        description: "Những câu chuyện tiến bộ truyền cảm hứng từ các học viên kiên trì theo đuổi chuẩn tiếng Anh quốc tế.",
        content: [
            "Sau 16 tuần học tập và luyện tập có kế hoạch, 32 học viên của IIG Training Center đã hoàn thành bài đánh giá TOEFL đầu tiên với những kết quả đáng khích lệ. Trong nhóm này, 25 học viên đạt hoặc vượt mục tiêu đặt ra từ đầu khóa, tương đương 78%. Thành tích không chỉ phản ánh điểm số cuối kỳ mà còn cho thấy sự tiến bộ rõ rệt trong khả năng đọc hiểu, nghe học thuật và trình bày ý tưởng. Trung tâm ghi nhận đây là một cột mốc quan trọng trong hành trình học tiếng Anh của các bạn.",
            { type: "image", src: newsToeflStudent, alt: "Học viên học tập với tài liệu tiếng Anh", caption: "Học viên rèn luyện kỹ năng đọc và ghi chú với tài liệu tiếng Anh học thuật." },
            "Ngay từ tuần đầu, mỗi học viên được thực hiện bài đánh giá chẩn đoán và trao đổi một-một với giảng viên. Kết quả cho thấy phần lớn người học có vốn từ khá nhưng gặp khó khăn khi xử lý văn bản dài hoặc nghe bài giảng có nhiều ý phụ. Chương trình vì vậy dành nhiều thời lượng hơn cho kỹ thuật ghi chú, xác định luận điểm và liên kết thông tin. Các bài tập được sắp xếp từ ngắn đến dài để người học xây dựng sức bền từng bước.",
            "Trong các buổi học nói và viết, học viên được khuyến khích trình bày quan điểm dựa trên dẫn chứng thay vì chỉ trả lời theo mẫu. Mỗi bài nói được ghi âm để người học tự nghe lại, đánh dấu chỗ ngập ngừng và nhận phản hồi từ bạn học. Với bài viết, giảng viên sử dụng bảng tiêu chí gồm tính mạch lạc, độ chính xác và khả năng phát triển ý. Cách phản hồi theo tiêu chí giúp học viên biết mình cần sửa điều gì trong lần luyện tập tiếp theo.",
            { type: "list", items: ["Bốn bài đánh giá tiến độ theo từng kỹ năng.", "Tám buổi luyện nghe bài giảng và ghi chú có hướng dẫn.", "Sáu buổi thực hành nói, viết theo chủ đề học thuật.", "Một buổi tư vấn cá nhân trước bài đánh giá cuối khóa."] },
            "Ông Trần Quốc Bảo, giảng viên phụ trách lớp, chia sẻ: “Điểm tiến bộ nhất của các bạn không nằm ở việc nhớ thêm bao nhiêu từ, mà ở cách các bạn biết dùng từ và ý tưởng để giải quyết một nhiệm vụ cụ thể”. Theo ông, sự kiên trì trong những phiên luyện tập ngắn hằng ngày tạo ra khác biệt lớn hơn so với việc học dồn. Nhiều học viên đã duy trì từ 25 đến 35 phút tự học mỗi ngày trong suốt chặng cuối của khóa.",
            "Gia đình và môi trường học tập cũng đóng vai trò quan trọng trong kết quả này. Trung tâm duy trì kênh cập nhật tiến độ theo tuần để học viên nhận phản hồi sớm và phụ huynh hiểu được quá trình thay vì chỉ nhìn vào một bài kiểm tra. Những buổi chữa bài chung giúp các bạn nhận ra lỗi phổ biến và học từ chiến lược của nhau. Không khí cạnh tranh tích cực được xây dựng trên sự hỗ trợ, không phải so sánh áp lực.",
            { type: "image", src: newsLearningCommunity, alt: "Nhóm học viên cùng trao đổi trong lớp", caption: "Học viên trao đổi chiến lược học tập và hỗ trợ nhau trong quá trình chuẩn bị TOEFL." },
            "Kết quả cuối khóa cho thấy điểm trung bình của nhóm tăng 18% so với bài đánh giá đầu vào, trong đó kỹ năng nghe có mức cải thiện rõ nhất. Những học viên chưa đạt mục tiêu vẫn nhận được kế hoạch luyện tập tiếp theo dựa trên lỗi cụ thể. Trung tâm khuyến khích các bạn xem kết quả là dữ liệu để điều chỉnh, không phải nhãn đánh giá cố định. Đây là tinh thần học tập lâu dài mà chương trình muốn xây dựng.",
            "Cột mốc TOEFL đầu tiên khép lại một chặng đường và mở ra những mục tiêu mới cho học viên. Một số bạn đã bắt đầu chuẩn bị cho kế hoạch du học, trong khi những bạn khác muốn dùng tiếng Anh tốt hơn trong chương trình đại học. IIG Training Center sẽ tiếp tục phát triển các lớp học theo cấp độ và nhu cầu học thuật. Thành công của mỗi học viên là động lực để trung tâm đầu tư sâu hơn vào việc đồng hành cá nhân hóa.",
        ],
        featured: true,
    },
    {
        id: 4,
        title: "IIG Training Center ra mắt lớp luyện thi TOEIC cấp tốc",
        category: "TOEIC",
        tags: ["TOEIC", "Luyện thi", "Đào tạo"],
        date: "15/08/2026",
        image: newsToeicClass,
        description: "Chương trình tinh gọn, tập trung vào chiến thuật làm bài và thực hành theo từng kỹ năng.",
        content: [
            "Lớp luyện thi TOEIC cấp tốc được xây dựng cho học viên cần một lộ trình tập trung trong thời gian ngắn nhưng vẫn bảo đảm nền tảng cần thiết.",
            "Mỗi buổi học kết hợp hướng dẫn chiến thuật, luyện tập theo dạng câu hỏi và chữa bài chi tiết. Học viên được theo dõi tiến độ để nhận biết kỹ năng cần ưu tiên.",
            "Môi trường học tập giàu tương tác giúp người học duy trì nhịp luyện tập và tự tin hơn trước kỳ thi chính thức.",
        ],
    },
    {
        id: 5,
        title: "Đồng hành cùng giáo viên trong hành trình đổi mới lớp học",
        category: "Hợp tác",
        tags: ["Giáo viên", "Hợp tác", "Đổi mới lớp học"],
        date: "09/08/2026",
        image: newsTeacherCollaboration,
        description: "Các hoạt động chia sẻ chuyên môn giúp giáo viên tăng cường tương tác và ứng dụng công nghệ giáo dục.",
        content: [
            "Chương trình đồng hành cùng giáo viên trong đổi mới lớp học do IIG Training Center tổ chức đã kết nối 42 giáo viên đến từ các trung tâm ngoại ngữ và trường học. Hoạt động kéo dài hai ngày, tập trung vào những tình huống thường gặp khi tổ chức lớp học tiếng Anh có trình độ không đồng đều. Thay vì cung cấp một công thức duy nhất, chương trình khuyến khích giáo viên quan sát dữ liệu lớp học và thử nghiệm giải pháp phù hợp. Đây là một phần trong định hướng phát triển cộng đồng chuyên môn của trung tâm.",
            { type: "image", src: newsTeacherCollaboration, alt: "Giáo viên trao đổi về phương pháp giảng dạy", caption: "Giáo viên chia sẻ kinh nghiệm thiết kế hoạt động tương tác trong lớp học." },
            "Trong phiên đầu tiên, các nhóm phân tích một tình huống gồm 35 học viên với mức độ tham gia khác nhau. Giáo viên cùng xác định nguyên nhân khiến một số học viên ít phát biểu và đề xuất cách chia nhóm, phân vai, thay đổi thời lượng hoạt động. Kết quả thảo luận cho thấy hơn một nửa nhóm ưu tiên giải pháp giảm thời gian hướng dẫn chung và tăng phần thực hành có cấu trúc. Những ý tưởng này được thử nghiệm ngay trong các tiết dạy mô phỏng.",
            "Một chuyên đề khác tập trung vào phản hồi. Giảng viên hướng dẫn cách chuyển nhận xét chung như “em cần nói tự tin hơn” thành chỉ dẫn có thể hành động, chẳng hạn nói đủ ý trong 45 giây hoặc sử dụng hai cách nối ý mới. Giáo viên tham gia đóng vai người học để cảm nhận mức độ rõ ràng của từng dạng phản hồi. Qua đó, các thầy cô nhận ra phản hồi hiệu quả cần kịp thời, cụ thể và gắn với mục tiêu của bài học.",
            { type: "list", items: ["Thiết kế hoạt động nhóm cho lớp có trình độ không đồng đều.", "Xây dựng tiêu chí quan sát mức độ tham gia của học viên.", "Sử dụng công cụ số để thu thập phản hồi nhanh.", "Lập kế hoạch thử nghiệm một thay đổi nhỏ trong bốn tuần."] },
            "Bà Nguyễn Mai Lan, đại diện nhóm phát triển chuyên môn, cho biết: “Đổi mới lớp học không bắt đầu từ việc sử dụng thật nhiều công cụ. Nó bắt đầu từ một câu hỏi cụ thể về việc học viên đang gặp khó khăn ở đâu và giáo viên có thể thay đổi điều gì trong buổi học tiếp theo”. Quan điểm này được thể hiện xuyên suốt chương trình qua các hoạt động quan sát, thử nghiệm và phản hồi. Mỗi giáo viên rời workshop với một kế hoạch áp dụng nhỏ thay vì một danh sách lý thuyết dài.",
            "Sau chương trình, 36 giáo viên đăng ký tham gia nhóm chia sẻ thực hành trong tám tuần. Mỗi tuần, thành viên ghi lại một hoạt động đã thử, dữ liệu quan sát được và điều muốn điều chỉnh. Trung tâm sẽ tổ chức hai phiên trực tuyến để các nhóm cùng phân tích kết quả. Cách làm này giúp việc bồi dưỡng không kết thúc ngay sau sự kiện mà tiếp tục đi vào thực tế lớp học.",
            { type: "image", src: newsEnglishWorkshop, alt: "Giáo viên trình bày ý tưởng trong hội thảo", caption: "Một nhóm giáo viên trình bày kế hoạch cải thiện mức độ tương tác của học viên." },
            "Những trao đổi tại chương trình cho thấy giáo viên cần nhiều hơn các tài liệu mẫu; họ cần một cộng đồng để thử, sai và học hỏi cùng nhau. IIG Training Center sẽ tiếp tục xây dựng các chuyên đề theo nhu cầu thực tế như đánh giá năng lực nói, quản lý hoạt động nhóm và hỗ trợ người học thiếu tự tin. Các kết quả từ nhóm thử nghiệm sẽ được tổng hợp thành tài liệu chia sẻ mở. Đây là bước tiến nhỏ nhưng có ý nghĩa đối với chất lượng đào tạo bền vững.",
            "Khi giáo viên có thêm công cụ quan sát và phản hồi, học viên sẽ có nhiều cơ hội được tham gia theo cách phù hợp với mình. Đổi mới vì thế không chỉ là câu chuyện của một buổi hội thảo, mà là quá trình cải thiện liên tục trong từng lớp học. Trung tâm kỳ vọng mạng lưới giáo viên đồng hành sẽ ngày càng mở rộng. Những sáng kiến tốt từ cộng đồng sẽ tiếp tục được giới thiệu trong các hoạt động chuyên môn tiếp theo.",
        ],
    },
    {
        id: 6,
        title: "Lớp MOS khai giảng: trang bị kỹ năng số cho tương lai",
        category: "MOS",
        tags: ["MOS", "Kỹ năng số", "Khai giảng"],
        date: "02/08/2026",
        image: newsMosDigitalSkills,
        description: "Học viên thực hành trên các tình huống gần với học tập và công việc, từ cơ bản đến nâng cao.",
        content: [
            "Lớp MOS tháng 8 tại IIG Training Center khai giảng với 36 học viên, trong đó có học sinh, sinh viên và người đi làm đang muốn chuẩn hóa kỹ năng số. Khóa học kéo dài 12 tuần, gồm 36 buổi thực hành trên các tình huống quản lý tài liệu, dữ liệu và báo cáo. Chương trình được thiết kế theo hướng học qua dự án để người học thấy rõ lý do sử dụng một công cụ, thay vì chỉ ghi nhớ thao tác. Đây là mô hình được trung tâm thử nghiệm sau khi khảo sát nhu cầu của 120 học viên.",
            { type: "image", src: newsMosDigitalSkills, alt: "Học viên thực hành kỹ năng tin học văn phòng", caption: "Học viên thực hành các kỹ năng số trong phòng máy của IIG Training Center." },
            "Ở chặng đầu, học viên làm quen với cách tổ chức thư mục, đặt tên tệp và xây dựng quy trình làm việc nhất quán. Những kỹ năng tưởng như đơn giản này giúp giảm thời gian tìm kiếm và hạn chế lỗi khi làm việc nhóm. Sang chặng tiếp theo, lớp học chuyển sang xử lý bảng dữ liệu, trực quan hóa thông tin và trình bày kết quả. Mỗi nhiệm vụ đều có tiêu chí rõ ràng về độ chính xác, tính dễ đọc và khả năng cập nhật.",
            "Dự án giữa khóa yêu cầu học viên xây dựng một báo cáo theo dõi hoạt động của một câu lạc bộ giả định. Người học phải làm sạch dữ liệu, tạo bảng tổng hợp và trình bày một trang kết luận cho người quản lý. Qua bài tập này, giảng viên nhận thấy 83% học viên có thể hoàn thành các bước cơ bản sau lần hướng dẫn đầu tiên. Những lỗi còn lại chủ yếu liên quan đến kiểm tra dữ liệu và cách lựa chọn biểu đồ.",
            { type: "list", items: ["Thực hành quy trình quản lý tệp và dữ liệu có hệ thống.", "Hoàn thành ba dự án mô phỏng gắn với học tập và công việc.", "Nhận phản hồi theo tiêu chí rõ ràng sau mỗi bài thực hành.", "Luyện tập cách trình bày kết quả cho người không chuyên kỹ thuật."] },
            "Ông Phạm Đức Long, giảng viên phụ trách chương trình MOS, chia sẻ: “Kỹ năng số chỉ thực sự có giá trị khi giúp người học làm việc rõ ràng hơn và ra quyết định nhanh hơn. Vì vậy, chúng tôi luôn bắt đầu từ một nhiệm vụ thực tế rồi mới giới thiệu công cụ phù hợp”. Theo ông, việc giải thích lựa chọn thao tác quan trọng không kém việc thực hiện thao tác chính xác.",
            "Lớp học cũng dành thời gian cho kỹ năng phối hợp và kiểm tra chéo. Học viên làm việc theo cặp để phát hiện lỗi trong bảng dữ liệu của nhau, sau đó trình bày cách sửa trước nhóm. Hoạt động này rèn sự cẩn thận và khả năng giải thích, hai yếu tố thường bị bỏ qua khi người học chỉ luyện thao tác một mình. Cuối mỗi tuần, học viên hoàn thành một bài kiểm tra ngắn để theo dõi tiến độ.",
            { type: "image", src: newsMosProject, alt: "Học viên trình bày dự án kỹ năng số", caption: "Học viên trình bày kết quả dự án và giải thích cách xử lý dữ liệu." },
            "Sau sáu tuần, điểm đánh giá thực hành trung bình của lớp tăng 21% so với bài đầu vào. Đặc biệt, thời gian hoàn thành một nhiệm vụ tổng hợp giảm từ 42 phút xuống còn 31 phút trong nhóm đã duy trì đủ bài luyện. Trung tâm sẽ tiếp tục đo lường kết quả ở cuối khóa để đánh giá mức độ chuyển hóa từ lớp học sang công việc. Dữ liệu này cũng là cơ sở để điều chỉnh các dự án thực hành cho khóa tiếp theo.",
            "Việc học MOS không dừng ở mục tiêu hoàn thành bài thi. Nền tảng kỹ năng số giúp học viên tự tin hơn khi học tập, làm việc nhóm và trình bày thông tin. IIG Training Center định hướng mở rộng các lớp theo ngành nghề, trong đó có quản trị dữ liệu cơ bản và công cụ hỗ trợ cộng tác. Mỗi khóa học sẽ tiếp tục được xây dựng quanh những nhiệm vụ mà người học có thể gặp trong đời sống thật.",
        ],
    },
    {
        id: 7,
        title: "Bí quyết xây dựng kế hoạch học tập tiếng Anh hiệu quả",
        category: "Đào tạo",
        tags: ["Tiếng Anh", "Kế hoạch học tập", "Đào tạo"],
        date: "26/07/2026",
        image: newsStudyPlanning,
        description: "Một kế hoạch rõ ràng giúp bạn duy trì động lực và đo lường tiến bộ qua từng tuần học.",
        content: [
            "Một kế hoạch học tiếng Anh hiệu quả nên bắt đầu từ mục tiêu cụ thể và khoảng thời gian mà người học thực sự có thể duy trì.",
            "IIG Training Center gợi ý chia mục tiêu lớn thành các nhiệm vụ ngắn theo tuần, kết hợp giữa tiếp nhận kiến thức, thực hành và ôn tập có chủ đích.",
            "Khi ghi lại kết quả sau mỗi tuần, học viên có thể điều chỉnh nhịp học, nhận diện điểm yếu và duy trì động lực lâu dài hơn.",
        ],
    },
    {
        id: 8,
        title: "Ngày hội trải nghiệm lớp học và tư vấn lộ trình miễn phí",
        category: "Sự kiện",
        tags: ["Ngày hội", "Trải nghiệm", "Tư vấn lộ trình"],
        date: "18/07/2026",
        image: newsOpenClassDay,
        description: "Tham gia hoạt động trải nghiệm, gặp gỡ giảng viên và nhận tư vấn lộ trình phù hợp với mục tiêu.",
        content: [
            "Ngày hội trải nghiệm lớp học là cơ hội để người học làm quen với không khí đào tạo tại IIG Training Center.",
            "Khách tham dự có thể tham gia hoạt động tiếng Anh ngắn, trao đổi với giảng viên và tìm hiểu sự khác nhau giữa các lộ trình theo mục tiêu.",
            "Sau chương trình, đội ngũ tư vấn hỗ trợ người học xác định bước bắt đầu phù hợp dựa trên trình độ, thời gian và định hướng cá nhân.",
        ],
    },
    {
        id: 9,
        title: "TOEIC Speaking & Writing: kỹ năng tạo khác biệt nơi công sở",
        category: "TOEIC",
        tags: ["TOEIC", "Speaking & Writing", "Kỹ năng công sở"],
        date: "12/07/2026",
        image: newsSpeakingPractice,
        description: "Tìm hiểu cách rèn luyện phản xạ và diễn đạt để giao tiếp tiếng Anh tự nhiên, chuyên nghiệp hơn.",
        content: [
            "TOEIC Speaking & Writing giúp người học phát triển khả năng diễn đạt rõ ràng trong những tình huống giao tiếp học tập và công việc.",
            "Các buổi luyện tập tập trung vào phản xạ, cấu trúc câu, cách mở rộng ý và phương pháp tự kiểm tra độ chính xác của phần trình bày.",
            "Khi kết hợp luyện nói và viết đều đặn, học viên có thể chuyển kiến thức tiếng Anh thành năng lực sử dụng thực tế một cách tự nhiên hơn.",
        ],
    },
    {
        id: 10,
        title: "Giảng viên IIG chia sẻ cách luyện nghe tiếng Anh mỗi ngày",
        category: "TOEFL",
        tags: ["TOEFL", "Luyện nghe", "Giảng viên"],
        date: "05/07/2026",
        image: newsListeningLesson,
        description: "Các bài tập ngắn và đều đặn giúp người học cải thiện khả năng nghe trong nhiều ngữ cảnh.",
        content: [
            "Luyện nghe hiệu quả không nhất thiết phải bắt đầu bằng những bài học dài. Các phiên luyện tập ngắn, đều đặn giúp người học duy trì sự tập trung.",
            "Giảng viên IIG hướng dẫn học viên nghe theo từng lớp thông tin, từ ý chính đến chi tiết, sau đó đối chiếu và rút kinh nghiệm từ lỗi thường gặp.",
            "Người học có thể áp dụng phương pháp này với hội thoại, bài giảng và nội dung công việc để dần mở rộng khả năng nghe trong nhiều bối cảnh.",
        ],
    },
    {
        id: 11,
        title: "Thông báo lịch học và lịch nghỉ lễ tháng 7",
        category: "Thông báo",
        tags: ["Thông báo", "Lịch học", "IIG Training Center"],
        date: "30/06/2026",
        image: newsHolidayNotice,
        description: "Thông tin cập nhật dành cho học viên đang theo học tại IIG Training Center.",
        content: [
            "IIG Training Center gửi tới học viên thông tin cập nhật về lịch học và lịch nghỉ lễ trong tháng 7.",
            "Học viên vui lòng kiểm tra lịch lớp, chủ động sắp xếp thời gian và theo dõi các kênh thông tin của trung tâm để nhận thông báo mới nhất.",
            "Trong trường hợp cần hỗ trợ, học viên có thể liên hệ bộ phận tư vấn hoặc giáo vụ để được hướng dẫn cụ thể.",
        ],
    },
    {
        id: 12,
        title: "Ứng dụng công nghệ để cá nhân hóa trải nghiệm học tập",
        category: "Tin khác",
        tags: ["Công nghệ giáo dục", "Học tập số", "Đổi mới"],
        date: "24/06/2026",
        image: newsLearningTechnology,
        description: "Dữ liệu học tập giúp học viên nhìn rõ điểm mạnh, điểm cần cải thiện và chủ động điều chỉnh lộ trình.",
        content: [
            "IIG Training Center đang thử nghiệm một mô hình ứng dụng công nghệ và AI có kiểm soát để cá nhân hóa trải nghiệm học tập. Dự án được triển khai trên 6 lớp với 164 học viên trong thời gian 8 tuần. Mục tiêu không phải thay thế giảng viên, mà cung cấp thêm dữ liệu để giáo viên nhận ra người học đang cần hỗ trợ ở đâu. Đây là hướng tiếp cận phù hợp với yêu cầu ngày càng đa dạng về tốc độ và mục tiêu học tập.",
            { type: "image", src: newsLearningTechnology, alt: "Học viên sử dụng công nghệ trong quá trình học", caption: "Công nghệ được sử dụng như công cụ hỗ trợ phản hồi và theo dõi tiến bộ học tập." },
            "Trong giai đoạn đầu, hệ thống ghi nhận ba nhóm dữ liệu: tỷ lệ hoàn thành bài luyện, dạng lỗi lặp lại và thời gian người học cần để hoàn thành nhiệm vụ. Những dữ liệu này được tổng hợp theo nhóm kỹ năng, không dùng để gắn nhãn hay xếp hạng cá nhân. Giảng viên xem báo cáo hằng tuần và quyết định nội dung cần bổ sung trong buổi học tiếp theo. Quyền riêng tư và sự minh bạch được đặt lên trước tốc độ triển khai.",
            "Một ứng dụng đáng chú ý là gợi ý bài luyện theo lỗi. Nếu nhiều học viên gặp khó khăn khi nghe số liệu hoặc xác định ý chính, hệ thống đề xuất một chuỗi bài ngắn có độ khó tăng dần. Học viên vẫn có quyền lựa chọn bài khác và trao đổi trực tiếp với giảng viên khi cần. Sau bốn tuần, tỷ lệ hoàn thành bài luyện tự chọn tăng 27% so với giai đoạn đầu của dự án.",
            { type: "list", items: ["Theo dõi tiến độ theo nhóm kỹ năng thay vì chỉ nhìn điểm tổng.", "Gợi ý bài luyện ngắn dựa trên lỗi người học thường gặp.", "Cho phép giảng viên kiểm tra và điều chỉnh mọi khuyến nghị.", "Bảo vệ dữ liệu học tập và thông báo rõ mục đích sử dụng."] },
            "Bà Vũ Thanh Hương, phụ trách đổi mới đào tạo, chia sẻ: “AI có thể giúp chúng ta nhìn thấy tín hiệu trong dữ liệu, nhưng chỉ giáo viên mới hiểu đầy đủ bối cảnh của một người học. Mọi gợi ý từ hệ thống đều cần được kiểm tra bằng quan sát sư phạm và cuộc trò chuyện với học viên”. Nguyên tắc này giúp dự án duy trì được sự cân bằng giữa công nghệ và mối quan hệ con người trong lớp học.",
            "Bên cạnh lợi ích, dự án cũng chỉ ra những giới hạn cần tiếp tục nghiên cứu. Một bài làm chưa hoàn thành có thể xuất phát từ lịch làm việc bận rộn chứ không nhất thiết là thiếu năng lực. Một lỗi ngữ pháp lặp lại cũng cần được đặt trong bối cảnh ngôn ngữ mẹ đẻ và mục tiêu giao tiếp của người học. Vì vậy, báo cáo hệ thống luôn được trình bày như một điểm bắt đầu cho trao đổi, không phải kết luận cuối cùng.",
            { type: "image", src: newsTeacherCollaboration, alt: "Giảng viên phân tích dữ liệu học tập cùng đồng nghiệp", caption: "Giảng viên trao đổi cách diễn giải dữ liệu để đưa ra hỗ trợ phù hợp cho học viên." },
            "Kết quả giữa kỳ cho thấy 72% học viên trong nhóm thử nghiệm cảm thấy dễ nhận biết điểm cần cải thiện hơn, trong khi 64% cho biết các bài luyện ngắn giúp họ duy trì thói quen tốt hơn. Trung tâm sẽ tiếp tục khảo sát chất lượng phản hồi và theo dõi kết quả cuối khóa trước khi mở rộng mô hình. Những chỉ số về sự tiến bộ sẽ được xem xét cùng với phản hồi định tính từ học viên và giáo viên. Đây là bước cần thiết để tránh việc chạy theo công nghệ mà quên đi mục tiêu học tập.",
            "Ứng dụng AI trong giáo dục chỉ có ý nghĩa khi làm cho việc học rõ ràng, công bằng và nhân văn hơn. IIG Training Center định hướng phát triển các công cụ hỗ trợ vừa đủ, dễ hiểu và luôn có sự giám sát của giáo viên. Trong giai đoạn tới, trung tâm sẽ tập trung vào khả năng giải thích khuyến nghị và tăng quyền kiểm soát cho người học. Những bài học từ dự án sẽ được dùng để thiết kế các chương trình đào tạo số có trách nhiệm hơn.",
        ],
    },
    {
        id: 13,
        title: "Câu lạc bộ tiếng Anh: học qua dự án và hoạt động nhóm",
        category: "Đào tạo",
        tags: ["Câu lạc bộ", "Tiếng Anh", "Học qua dự án"],
        date: "17/06/2026",
        image: newsEnglishClub,
        description: "Không gian thực hành thân thiện để học viên sử dụng tiếng Anh thường xuyên ngoài giờ học.",
        content: [
            "Câu lạc bộ tiếng Anh tạo ra một không gian thân thiện để học viên sử dụng ngôn ngữ thường xuyên ngoài giờ học chính khóa.",
            "Mỗi hoạt động được tổ chức theo dự án hoặc chủ đề gần gũi, khuyến khích học viên làm việc nhóm, trình bày và phản hồi cho nhau.",
            "Qua những lần thực hành đều đặn, học viên có thêm sự tự tin để sử dụng tiếng Anh trong giao tiếp và những tình huống đời sống.",
        ],
    },
    {
        id: 14,
        title: "Kết nối doanh nghiệp, mở rộng cơ hội thực hành cho học viên",
        category: "Hợp tác",
        tags: ["Doanh nghiệp", "Hợp tác", "Kỹ năng nghề nghiệp"],
        date: "10/06/2026",
        image: newsBusinessPartnership,
        description: "Các hoạt động hợp tác góp phần đưa kỹ năng tiếng Anh và tin học đến gần hơn với nhu cầu thực tế.",
        content: [
            "Kết nối với doanh nghiệp giúp các chương trình đào tạo bám sát hơn với kỹ năng mà người học cần trong môi trường làm việc.",
            "Thông qua trao đổi với đối tác, IIG Training Center cập nhật những tình huống sử dụng tiếng Anh và kỹ năng số phổ biến trong nhiều lĩnh vực.",
            "Những hoạt động hợp tác bền vững sẽ tạo thêm cơ hội để học viên quan sát, thực hành và chuẩn bị tốt hơn cho hành trình nghề nghiệp.",
        ],
    },
    {
        id: 15,
        title: "Chinh phục MOS với phương pháp luyện tập theo tình huống",
        category: "MOS",
        tags: ["MOS", "Thực hành", "Kỹ năng số"],
        date: "03/06/2026",
        image: newsMosProject,
        description: "Thực hành theo dự án giúp học viên ghi nhớ thao tác và vận dụng công cụ linh hoạt hơn.",
        content: [
            "Phương pháp luyện MOS theo tình huống đưa người học vào những bài toán gần với công việc như lập bảng, xử lý thông tin và trình bày báo cáo.",
            "Thay vì chỉ học từng thao tác rời rạc, học viên được hướng dẫn hoàn thành một dự án nhỏ từ đầu đến cuối và nhận phản hồi sau mỗi bước.",
            "Cách học này giúp kiến thức dễ ghi nhớ hơn, đồng thời phát triển khả năng lựa chọn công cụ phù hợp với từng nhiệm vụ.",
        ],
    },
    {
        id: 16,
        title: "TOEFL Junior: chuẩn bị nền tảng tiếng Anh cho học sinh",
        category: "TOEFL",
        tags: ["TOEFL Junior", "Học sinh", "Tiếng Anh học thuật"],
        date: "27/05/2026",
        image: newsToeflJunior,
        description: "Lộ trình được thiết kế phù hợp với độ tuổi, khuyến khích học sinh phát triển đồng đều bốn kỹ năng.",
        content: [
            "TOEFL Junior là một bước chuẩn bị phù hợp cho học sinh muốn phát triển nền tảng tiếng Anh học thuật từ sớm.",
            "Lộ trình tại IIG Training Center cân bằng giữa nghe, nói, đọc và viết, đồng thời sử dụng hoạt động phù hợp với độ tuổi để giữ hứng thú học tập.",
            "Học sinh được khuyến khích xây dựng thói quen học đều đặn và từng bước làm quen với chuẩn đánh giá tiếng Anh quốc tế.",
        ],
    },
    {
        id: 17,
        title: "Thông báo mở đăng ký các lớp học mùa hè",
        category: "Thông báo",
        tags: ["Thông báo", "Lớp học mùa hè", "Tiếng Anh"],
        date: "20/05/2026",
        image: newsSummerCourse,
        description: "Các lớp tiếng Anh và kỹ năng số đã sẵn sàng cho một mùa hè học tập chủ động, nhiều trải nghiệm.",
        content: [
            "Các lớp học mùa hè của IIG Training Center kết hợp giữa kiến thức nền tảng, hoạt động thực hành và trải nghiệm tương tác.",
            "Học viên có thể lựa chọn chương trình tiếng Anh hoặc kỹ năng số theo độ tuổi, mục tiêu và thời gian cá nhân.",
            "Mùa hè là thời điểm phù hợp để xây dựng một thói quen học tập mới và chuẩn bị nền tảng vững vàng cho năm học tiếp theo.",
        ],
    },
    {
        id: 18,
        title: "Khoảnh khắc đáng nhớ trong hành trình học tập tại IIG",
        category: "Tin khác",
        tags: ["Cộng đồng học tập", "Học viên", "IIG Training Center"],
        date: "12/05/2026",
        image: newsLearningCommunity,
        description: "Cùng nhìn lại những hoạt động gắn kết đã tạo nên cộng đồng học tập tích cực tại trung tâm.",
        content: [
            "Mỗi lớp học, buổi workshop và hoạt động câu lạc bộ đều góp phần tạo nên một cộng đồng học tập tích cực tại IIG Training Center.",
            "Ở đó, học viên được khuyến khích đặt câu hỏi, chia sẻ kinh nghiệm và ghi nhận sự tiến bộ của nhau trong từng chặng đường.",
            "Những khoảnh khắc đáng nhớ là động lực để trung tâm tiếp tục xây dựng môi trường đào tạo chuyên nghiệp, gần gũi và giàu cảm hứng.",
        ],
    },
];

export const newsCategories = [
    "Tất cả",
    "Đào tạo",
    "Sự kiện",
    "Hợp tác",
    "TOEIC",
    "TOEFL",
    "MOS",
    "Thông báo",
    "Tin khác",
];

export const newsData = assignUniqueImages(rawNewsData);