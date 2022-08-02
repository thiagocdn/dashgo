import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thiago Cedran</Text>
          <Text color="gray.300" fontSize="small">
            thiagocdn@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Thiago Cedran"
        src="https://github.com/thiagocdn.png"
      />
    </Flex>
  );
}
