
import { QuizItem } from './types';

// Helper to resolve assets via Vite (works with import.meta.url)
const asset = (p: string) => new URL(p, import.meta.url).href;

export const QUIZ_DATA: QuizItem[] = [
  {
    id: 1,
    hint: 'Người đã chuẩn bị các điều kiện về chính trị, tư tưởng và tổ chức cho việc thành lập Đảng Cộng sản Việt Nam.',
    imageUrl: asset('./assets/chuong-1/1.jpg'),
    answer: 'Nguyễn Ái Quốc',
    chapter: 'Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945) - I. Đảng Cộng sản Việt Nam ra đời và Cương lĩnh chính trị đầu tiên của Đảng (tháng 2-1930)',
    keywordInfo: 'Lãnh tụ vĩ đại của cách mạng Việt Nam, Người sáng lập Đảng Cộng sản Việt Nam. Người đã tìm ra con đường cứu nước đúng đắn cho dân tộc.'
  },
  {
    id: 2,
    hint: 'Văn kiện do Nguyễn Ái Quốc soạn thảo, được thông qua tại Hội nghị thành lập Đảng, vạch ra đường lối chiến lược cơ bản cho cách mạng Việt Nam.',
    imageUrl: asset('./assets/chuong-1/2.jpeg'),
    answer: 'Cương lĩnh chính trị đầu tiên',
    chapter: 'Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945) - I. Đảng Cộng sản Việt Nam ra đời và Cương lĩnh chính trị đầu tiên của Đảng (tháng 2-1930)',
    keywordInfo: 'Do Nguyễn Ái Quốc soạn thảo, vạch ra đường lối chiến lược cơ bản: làm cách mạng tư sản dân quyền và thổ địa cách mạng để đi tới xã hội cộng sản. Đây là cương lĩnh giải phóng dân tộc đúng đắn và sáng tạo.'
  },
  {
    id: 3,
    hint: 'Đỉnh cao của phong trào cách mạng 1930-1931, nơi chính quyền công nông được thành lập ở một số vùng nông thôn Nghệ An và Hà Tĩnh.',
    imageUrl: asset('./assets/chuong-1/3.jpg'),
    answer: 'Xô Viết Nghệ Tĩnh',
    chapter: 'Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945) - II. Đảng lãnh đạo đấu tranh giành chính quyền (1930 - 1945)',
    keywordInfo: 'Phong trào cách mạng 1930-1931 với đỉnh cao là Xô Viết Nghệ Tĩnh. Đây là cuộc tổng diễn tập đầu tiên của cách mạng Việt Nam dưới sự lãnh đạo của Đảng.'
  },
  {
    id: 4,
    hint: 'Văn kiện do Trần Phú soạn thảo, được thông qua tại Hội nghị Ban Chấp hành Trung ương Đảng tháng 10-1930.',
    imageUrl: asset('./assets/chuong-1/4.jpg'),
    answer: 'Luận cương chính trị',
    chapter: 'Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945) - II. Đảng lãnh đạo đấu tranh giành chính quyền (1930 - 1945)',
    keywordInfo: 'So Trần Phú soạn thảo (10/1930), nhấn mạnh vấn đề đấu tranh giai cấp và cách mạng ruộng đất, tuy nhiên có hạn chế là chưa đặt nặng nhiệm vụ giải phóng dân tộc lên hàng đầu.'
  },
  {
    id: 5,
    hint: 'Tên gọi của Mặt trận được thành lập trong thời kỳ 1936-1939, nhằm tập hợp lực lượng đòi tự do, dân chủ, cơm áo, hòa bình.',
    imageUrl: asset('./assets/chuong-1/5.png'),
    answer: 'Mặt trận Dân chủ Đông Dương',
    chapter: 'Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945) - II. Đảng lãnh đạo đấu tranh giành chính quyền (1930 - 1945)',
    keywordInfo: 'Hình thức mặt trận trong giai đoạn 1936-1939. Đảng tạm gác khẩu hiệu cách mạng ruộng đất và độc lập dân tộc, đòi các quyền tự do, dân chủ, dân sinh.'
  },
  {
    id: 6,
    hint: 'Tên viết tắt của Việt Nam Độc lập Đồng minh Hội, thành lập năm 1941, nhằm đoàn kết toàn dân tộc để cứu nước.',
    imageUrl: asset('./assets/chuong-1/6.jpg'),
    answer: 'Mặt trận Việt Minh',
    chapter: 'Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945) - II. Đảng lãnh đạo đấu tranh giành chính quyền (1930 - 1945)',
    keywordInfo: 'Thành lập 19/5/1941. Chủ trương đoàn kết tất cả các tầng lớp nhân dân, không phân biệt giai cấp, tôn giáo để cùng nhau giải phóng dân tộc.'
  },
  {
    id: 7,
    hint: 'Cuộc khởi nghĩa vũ trang nổ ra ở Lạng Sơn vào tháng 9-1940, là một trong những tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc.',
    imageUrl: asset('./assets/chuong-1/7.png'),
    answer: 'Khởi nghĩa Bắc Sơn',
    chapter: 'Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945) - II. Đảng lãnh đạo đấu tranh giành chính quyền (1930 - 1945)',
    keywordInfo: 'Nổ ra tháng 9/1940. Tuy thất bại, nhưng đã dẫn đến sự ra đời của Đội Cứu quốc quân Bắc Sơn, một trong những lực lượng vũ trang đầu tiên của Đảng.'
  },
  {
    id: 8,
    hint: 'Cuộc khởi nghĩa nổ ra vào tháng 11-1940 ở miền Nam Việt Nam, thể hiện ý chí quật cường của nhân dân Nam Bộ.',
    imageUrl: asset('./assets/chuong-1/8.png'),
    answer: 'Khởi nghĩa Nam Kỳ',
    chapter: 'Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945) - II. Đảng lãnh đạo đấu tranh giành chính quyền (1930 - 1945)',
    keywordInfo: 'Nổ ra tháng 11/1940. Thể hiện tinh thần yêu nước quật cường của nhân dân Nam Bộ. Trong cuộc khởi nghĩa này, lá cờ đỏ sao vàng lần đầu tiên xuất hiện.'
  },
  {
    id: 9,
    hint: 'Phong trào diễn ra từ tháng 3-1945, ngay sau khi Nhật đảo chính Pháp, làm tiền đề trực tiếp cho Tổng khởi nghĩa.',
    imageUrl: asset('./assets/chuong-1/9.png'),
    answer: 'Cao trào kháng Nhật cứu nước',
    chapter: 'Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945) - II. Đảng lãnh đạo đấu tranh giành chính quyền (1930 - 1945)',
    keywordInfo: 'Diễn ra từ tháng 3/1945 sau khi Nhật đảo chính Pháp. Đây là cuộc tập dượt cuối cùng, tạo tiền đề trực tiếp cho Tổng khởi nghĩa tháng Tám.'
  },
  {
    id: 10,
    hint: 'Cuộc tổng khởi nghĩa giành chính quyền trên cả nước vào tháng 8-1945, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.',
    imageUrl: asset('./assets/chuong-1/10.jpg'),
    answer: 'Cách mạng Tháng Tám 1945',
    chapter: 'Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945) - II. Đảng lãnh đạo đấu tranh giành chính quyền (1930 - 1945)',
    keywordInfo: 'Cuộc tổng khởi nghĩa giành chính quyền trên cả nước, đập tan ách thống trị của phát xít Nhật và thực dân Pháp, lập nên nước Việt Nam Dân chủ Cộng hòa.'
  },
  {
    id: 11,
    hint: 'Lời kêu gọi của Chủ tịch Hồ Chí Minh vào ngày 19-12-1946, mở đầu cho cuộc kháng chiến 9 năm chống thực dân Pháp.',
    imageUrl: asset('./assets/chuong-2/1.jpg'),
    answer: 'Toàn quốc kháng chiến',
    chapter: 'Chương 2: Đảng lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945 - 1975) - I. Đảng lãnh đạo xây dựng, bảo vệ chính quyền cách mạng và kháng chiến chống thực dân Pháp xâm lược (1945 - 1954)',
    keywordInfo: 'Bắt đầu từ 19/12/1946. Thể hiện ý chí "Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ".'
  },
  {
    id: 12,
    hint: 'Chiến thắng quân sự quyết định năm 1954, kết thúc thắng lợi cuộc kháng chiến chống Pháp của nhân dân Việt Nam.',
    imageUrl: asset('./assets/chuong-2/2.jpg'),
    answer: 'Điện Biên Phủ',
    chapter: 'Chương 2: Đảng lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945 - 1975) - I. Đảng lãnh đạo xây dựng, bảo vệ chính quyền cách mạng và kháng chiến chống thực dân Pháp xâm lược (1945 - 1954)',
    keywordInfo: 'Chiến dịch diễn ra năm 1954, là thắng lợi quân sự lớn nhất của Việt Nam trong kháng chiến chống Pháp, buộc Pháp phải ký Hiệp định Genevo.'
  },
  {
    id: 13,
    hint: 'Hiệp định ký năm 1954, chấm dứt chiến tranh ở Đông Dương và tạm thời chia cắt Việt Nam tại vĩ tuyến 17.',
    imageUrl: asset('./assets/chuong-2/3.jpg'),
    answer: 'Hiệp định Genevo',
    chapter: 'Chương 2: Đảng lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945 - 1975) - I. Đảng lãnh đạo xây dựng, bảo vệ chính quyền cách mạng và kháng chiến chống thực dân Pháp xâm lược (1945 - 1954)',
    keywordInfo: 'Ký kết 21/7/1954, công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của ba nước Đông Dương. Tạm thời chia Việt Nam làm 2 miền tại vĩ tuyến 17.'
  },
  {
    id: 14,
    hint: 'Tuyến vận tải chiến lược chi viện từ miền Bắc cho chiến trường miền Nam trong kháng chiến chống Mỹ, còn gọi là Đường mòn Hồ Chí Minh.',
    imageUrl: asset('./assets/chuong-2/4.jpg'),
    answer: 'Đường Trường Sơn',
    chapter: 'Chương 2: Đảng lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945 - 1975) - II. Lãnh đạo xây dựng chủ nghĩa xã hội ở miền Bắc và kháng chiến chống đế quốc Mỹ xâm lược, giải phóng miền Nam, thống nhất đất nước (1954 - 1975)',
    keywordInfo: 'Còn gọi là Đường mòn Hồ Chí Minh. Tuyến vận tải chiến lược chi viện sức người, sức của từ hậu phương miền Bắc cho tiền tuyến lớn miền Nam.'
  },
  {
    id: 15,
    hint: 'Một cụm từ mang tính biểu tượng, thể hiện vai trò soi đường, dẫn dắt của Đảng Cộng sản Việt Nam trong suốt quá trình cách mạng.',
    imageUrl: asset('./assets/chuong-2/5.jpg'),
    answer: 'Ánh sáng của Đảng',
    chapter: 'Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945) - I. Đảng Cộng sản Việt Nam ra đời và Cương lĩnh chính trị đầu tiên của Đảng (tháng 2-1930)',
    keywordInfo: 'Cụm từ chỉ đường lối đúng đắn, sự lãnh đạo sáng suốt của Đảng Cộng sản Việt Nam, soi đường dẫn lối cho cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác.'
  },
  {
    id: 16,
    hint: 'Văn kiện do Chủ tịch Hồ Chí Minh đọc ngày 2-9-1945, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.',
    imageUrl: asset('./assets/chuong-2/6.jpg'),
    answer: 'Tuyên ngôn độc lập',
    chapter: 'Chương 2: Đảng lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945 - 1975) - I. Đảng lãnh đạo xây dựng, bảo vệ chính quyền cách mạng và kháng chiến chống thực dân Pháp xâm lược (1945 - 1954)',
    keywordInfo: 'Do Chủ tịch Hồ Chí Minh soạn thảo và đọc tại Quảng trường Ba Đình ngày 2/9/1945, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.'
  },
  {
    id: 17,
    hint: 'Chủ trương lớn của Đảng từ thời kỳ Đổi Mới, nhằm mở rộng quan hệ đối ngoại, chủ động tham gia vào đời sống kinh tế, chính trị toàn cầu.',
    imageUrl: asset('./assets/chuong-2/7.jpg'),
    answer: 'Hội nhập quốc tế',
    chapter: 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018) - II. Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế (từ năm 1986 đến nay)',
    keywordInfo: 'Chủ trương lớn của Đảng từ Đổi mới (1986), thực hiện chính sách đối ngoại đa phương hóa, đa dạng hóa, chủ động và tích cực hội nhập.'
  },
  {
    id: 18,
    hint: 'Quá trình chuyển đổi cơ cấu kinh tế từ nông nghiệp là chủ đạo sang công nghiệp và dịch vụ, một nhiệm vụ trung tâm của thời kỳ Đổi Mới.',
    imageUrl: asset('./assets/chuong-2/8.jpg'),
    answer: 'Công nghiệp hóa',
    chapter: 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018) - II. Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế (từ năm 1986 đến nay)',
    keywordInfo: 'Quá trình chuyển đổi nền kinh tế từ nông nghiệp sang công nghiệp. Tại Việt Nam, được đẩy mạnh từ sau Đổi mới với mục tiêu "Công nghiệp hóa, hiện đại hóa".'
  },
  {
    id: 19,
    hint: 'Những giá trị văn hóa cốt lõi, đặc trưng của dân tộc Việt Nam được Đảng chủ trương gìn giữ, phát huy trong bối cảnh toàn cầu hóa.',
    imageUrl: asset('./assets/chuong-2/9.jpg'),
    answer: 'Bản sắc dân tộc',
    chapter: 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018) - II. Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế (từ năm 1986 đến nay)',
    keywordInfo: 'Là những giá trị văn hóa truyền thống, cốt lõi, đặc trưng của dân tộc. Đảng chủ trương xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.'
  },
  {
    id: 20,
    hint: 'Truyền thuyết về nguồn gốc dân tộc Việt Nam, thể hiện tinh thần đoàn kết và niềm tự hào về nòi giống.',
    imageUrl: asset('./assets/chuong-2/10.jpg'),
    answer: 'Con rồng cháu tiên',
    chapter: 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018) - II. Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế (từ năm 1986 đến nay)',
    keywordInfo: 'Truyền thuyết về Lạc Long Quân và Âu Cơ, giải thích nguồn gốc chung của người Việt, là biểu tượng cho tinh thần đoàn kết dân tộc.'
  },
  {
    id: 21,
    hint: 'Sự kiện ngày 30/4/1975, giải phóng hoàn toàn miền Nam, kết thúc 30 năm kháng chiến, đưa đất nước vào giai đoạn thống nhất.',
    imageUrl: asset('./assets/chuong-3/1.png'),
    answer: 'Đại thắng mùa Xuân',
    chapter: 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018) - I. Đảng lãnh đạo cả nước xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc (1975 - 1986)',
    keywordInfo: 'Tên gọi cuộc Tổng tiến công và nổi dậy mùa Xuân 1975, đỉnh cao là Chiến dịch Hồ Chí Minh (30/4/1975), giải phóng hoàn toàn miền Nam, thống nhất đất nước.'
  },
  {
    id: 22,
    hint: 'Quá trình diễn ra từ 1975-1980 nhằm cải tạo công thương nghiệp tư bản, tư liệu sản xuất nông nghiệp, xây dựng kinh tế kế hoạch hóa.',
    imageUrl: asset('./assets/chuong-3/2.png'),
    answer: 'Cải tạo xã hội chủ nghĩa',
    chapter: 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018) - I. Đảng lãnh đạo cả nước xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc (1975 - 1986)',
    keywordInfo: 'Chủ trương lớn sau 1975 nhằm đưa miền Nam đi lên CNXH cùng cả nước. Bao gồm cải tạo công thương nghiệp tư bản tư doanh, hợp tác xã hóa nông nghiệp...'
  },
  {
    id: 23,
    hint: 'Văn bản pháp lý được thông qua năm 1980, đặt nền móng cho việc quản lý đất nước trong giai đoạn quá độ lên CNXH.',
    imageUrl: asset('./assets/chuong-3/3.png'),
    answer: 'Hiến pháp 1980',
    chapter: 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018) - I. Đảng lãnh đạo cả nước xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc (1975 - 1986)',
    keywordInfo: 'Bản Hiến pháp của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam thống nhất. Thể chế hóa đường lối của Đảng trong giai đoạn quá độ lên CNXH trên phạm vi cả nước.'
  },
  {
    id: 24,
    hint: 'Tên gọi của mô hình kinh tế giai đoạn 1975-1986, đặc trưng bởi sự quản lý tập trung của nhà nước, dẫn đến lạm phát và thiếu hụt hàng hóa.',
    imageUrl: asset('./assets/chuong-3/4.png'),
    answer: 'Bao cấp',
    chapter: 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018) - I. Đảng lãnh đạo cả nước xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc (1975 - 1986)',
    keywordInfo: 'Tên gọi của mô hình kinh tế kế hoạch hóa tập trung, nhà nước quản lý toàn diện. Mô hình này bộc lộ nhiều yếu kém, dẫn đến khủng hoảng kinh tế - xã hội trước Đổi mới.'
  },
  {
    id: 25,
    hint: 'Chủ trương được khởi động từ tháng 8/1986, chuyển đổi cơ chế quản lý từ tập trung bao cấp sang kinh tế thị trường xã hội chủ nghĩa.',
    imageUrl: asset('./assets/chuong-3/5.png'),
    answer: 'Đổi mới kinh tế',
    chapter: 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018) - II. Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế (từ năm 1986 đến nay)',
    keywordInfo: 'Bắt đầu từ Đại hội VI (12/1986), là bước ngoặt quan trọng. Chuyển từ kinh tế kế hoạch hóa tập trung, bao cấp sang kinh tế thị trường định hướng xã hội chủ nghĩa.'
  },
  {
    id: 26,
    hint: 'Quá trình bắt đầu từ 1986, thực hiện phát triển kinh tế đa thành phần, mở cửa hội nhập quốc tế, nâng cao đời sống nhân dân.',
    imageUrl: asset('./assets/chuong-3/6.png'),
    answer: 'Đổi mới toàn diện',
    chapter: 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018) - II. Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế (từ năm 1986 đến nay)',
    keywordInfo: 'Chủ trương của Đảng từ 1986, không chỉ đổi mới về kinh tế mà còn đổi mới về chính trị, văn hóa, xã hội, đối ngoại.'
  },
  {
    id: 27,
    hint: 'Các hội nghị toàn quốc định kỳ của Đảng, nơi đánh giá tình hình, sửa đổi chiến lược phát triển đất nước trong từng giai đoạn.',
    imageUrl: asset('./assets/chuong-3/7.png'),
    answer: 'Đại hội Đảng',
    chapter: 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018)',
    keywordInfo: 'Sự kiện chính trị quan trọng nhất, cơ quan lãnh đạo cao nhất của Đảng, được tổ chức định kỳ (thường là 5 năm/lần) để vạch ra đường lối, chiến lược.'
  }
];