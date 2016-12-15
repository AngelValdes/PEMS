--insert users
INSERT INTO [dbo].[users] ([username], [password], [first], [last], [dob], [email], [phone], [MainLocationNumber]) VALUES (N'111111', N'123', N'Angel', N'Valdes', N'1973-08-05 00:00:00', N'angel@mylearningdoor.com', N'3059876543', N'7841')
INSERT INTO [dbo].[users] ([username], [password], [first], [last], [dob], [email], [phone], [MainLocationNumber]) VALUES (N'222222', N'123', N'Cindy', N'Monsalve', N'1988-12-15 00:00:00', N'cindy@mylearningdoor.com', N'7866548765', N'7841')
INSERT INTO [dbo].[users] ([username], [password], [first], [last], [dob], [email], [phone], [MainLocationNumber]) VALUES (N'333333', N'123', N'Jorge', N'Bla', N'1978-12-10 00:00:00', N'jorge@mylearningdoor.com', N'3058987658', N'8002')

GO
--insert students
INSERT INTO [dbo].[students] ([username], [gradeLevel]) VALUES (N'111111', N'5th')
INSERT INTO [dbo].[students] ([username], [gradeLevel]) VALUES (N'222222', N'9th')
GO
--insert teacher
INSERT INTO [dbo].[teachers] ([username], [certificationArea]) VALUES (N'333333', N'Computers')
GO
--insert schools
INSERT INTO [dbo].[schools] ([schoolNumber], [name], [addressLine1], [addressLine2], [city], [state], [zipCode], [phone]) VALUES (N'7777', N'Robert Morgan', N'21498 SW 34th Ave', NULL, N'Homestead', N'FL', N'33178', N'3059809876')
INSERT INTO [dbo].[schools] ([schoolNumber], [name], [addressLine1], [addressLine2], [city], [state], [zipCode], [phone]) VALUES (N'7841', N'English Center', N'3521 SW 28th St', NULL, N'Miami', N'FL', N'33133', N'3054457731')
INSERT INTO [dbo].[schools] ([schoolNumber], [name], [addressLine1], [addressLine2], [city], [state], [zipCode], [phone]) VALUES (N'8002', N'Sunset Adult', N'7800 SW 107th Ave', NULL, N'Kendall', N'FL', N'33175', N'3058988789')

