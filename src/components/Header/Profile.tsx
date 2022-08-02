import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Thiago Cedran</Text>
        <Text color="gray.300" fontSize="small">
          thiagocdn@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Thiago Cedran"
        src="https://github.com/thiagocdn.png"
      />
    </Flex>
  );
}
